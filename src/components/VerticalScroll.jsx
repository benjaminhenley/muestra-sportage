import { useEffect, useState, useRef } from "react";
import arrowUp from "../assets/chevron-up.svg";
import arrowDown from "../assets/chevron-down.svg";

export default function VerticalScroll({
  containerRef,
  rightPosition = 0,
  topOffset = 0,
  bottomOffset = 0,
  smoothScroll = true,
  visible = false,
  className = "",
}) {
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState(false);
  const overlayRef = useRef(null);
  const [thumbTop, setThumbTop] = useState(0);

  // refs para drag y track
  const trackRef = useRef(null);
  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const startTopRef = useRef(0);
  const rafRef = useRef(0);


  const thumbHeight = 40
  const usable = Math.max(0, height - thumbHeight);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const valueToTop = (val, max = maxScroll) => (max ? (val / max) * usable : 0);
  const topToValue = (top, max = maxScroll) => (usable ? (top / usable) * max : 0);

  // calcular rango desplazable y alto disponible
  useEffect(() => {
    const element = containerRef?.current;
    if (!element) return;
    // console.log("element", element);

    // tamaño disponible para el slider
    const calc = () => {
      setMaxScroll(Math.max(0, element.scrollHeight - element.clientHeight));
      setHeight(element.clientHeight - Number(topOffset) - Number(bottomOffset));

      // sincroniza range y chevron con el scroll actual
      setThumbTop(valueToTop(element.scrollTop));    
      if (overlayRef.current) {
        overlayRef.current.max = String(Math.max(0, element.scrollHeight - element.clientHeight));
        overlayRef.current.value = String(element.scrollTop);
      }
    };

    calc();
    // observar cambios en el tamaño del contenedor
    const containerObserver = new ResizeObserver(calc);
    containerObserver.observe(element);
    window.addEventListener("resize", calc);

    return () => {
      window.removeEventListener("resize", calc);
      containerObserver.disconnect();
    };
  }, [containerRef, topOffset, bottomOffset]);

  // sincronizar slider cuando hay scroll nativo
  useEffect(() => {
    const element = containerRef?.current;
    if (!element) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        // 1) Recalcular maxScroll en cada scroll (contenido puede crecer)
        const ms = Math.max(0, element.scrollHeight - element.clientHeight);
        if (ms !== maxScroll) setMaxScroll(ms);
  
        // 2) Estado del scroll + píldora
        const sp = element.scrollTop;
        setScrollPosition(sp);
        setThumbTop(valueToTop(sp, ms));
  
        // 3) Mantener el range sincronizado (max y value)
        if (overlayRef.current) {
          overlayRef.current.max = String(ms);
          overlayRef.current.value = String(sp);
        }
      });
    };
    element.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef, maxScroll]);

  // mover el contenedor
  const onRange = (e) => {
    // console.log("onRange", e.target.value);
    const currentValue = Number(e.target.value);
    setScrollPosition(currentValue);
    setThumbTop(valueToTop(currentValue));
    containerRef?.current?.scrollTo({
      top: currentValue,
      behavior: smoothScroll ? "smooth" : "auto",
    });
  };

  const onThumbDown = (e) => {
    draggingRef.current = true;
    startYRef.current = e.clientY;
    startTopRef.current = thumbTop;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  
  const onThumbMove = (e) => {
    if (!draggingRef.current) return;
    const dy = e.clientY - startYRef.current;
    const nextTop = clamp(startTopRef.current + dy, 0, usable);
    setThumbTop(nextTop);
  
    const nextScroll = topToValue(nextTop);   
    setScrollPosition(nextScroll);
    if (overlayRef.current) overlayRef.current.value = String(nextScroll);
    containerRef?.current?.scrollTo({ top: nextScroll, behavior: "auto" });
  };
  
  const onThumbUp = (e) => {
    draggingRef.current = false;
    try { e.currentTarget.releasePointerCapture?.(e.pointerId); } catch {}
  };
  
  const onTrackClick = (e) => {
    if (e.target.closest("[data-thumb]")) return;  
    const rect = trackRef.current.getBoundingClientRect();
    const y = clamp(e.clientY - rect.top - thumbHeight / 2, 0, usable);
    setThumbTop(y);
    const val = topToValue(y);
    setScrollPosition(val);
    if (overlayRef.current) overlayRef.current.value = String(val);
    containerRef?.current?.scrollTo({ top: val, behavior: "smooth" });
  };

  return (
    <div className="absolute z-10 flex-1 h-full w-[1px] bottom-0 -right-6 bg-[#CDD0D2]">
      <input
        ref={overlayRef}
        type="range"
        min={0}
        max={maxScroll}
        value={scrollPosition}
        onChange={onRange}
        onPointerDown={() => setDragging(true)}
        onPointerUp={() => setDragging(false)}
        className={`absolute z-10 ${dragging ? "cursor-grabbing" : "cursor-grab"} ${className}`}
        style={{
          right: rightPosition,
          top: "100%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "right",
          width: height > 0 ? height : 0,
          opacity: visible ? 1 : 0,
        }}
      />
      <div 
        ref={trackRef}
        className="absolute top-0 -right-3 flex flex-col border-none"
        style={{ height: `${height}px`, width: "24px", touchAction: "none" }}
        onPointerMove={onThumbMove}
        onPointerUp={onThumbUp}
        onPointerCancel={onThumbUp}
        onClick={onTrackClick}
      >
      <div className="absolute z-10 bg-[#05141F] disabled:opacity-50 rounded-full w-6 h-11 flex items-center justify-center"
      style={{ top: `${thumbTop}px`}}
      onPointerDown={onThumbDown}
      >
        <div className="pointer-events-none flex flex-col items-center justify-around h-full ">
          <img src={arrowUp} alt="arrow-up" className="w-5 h-5" />
          <img src={arrowDown} alt="arrow-down" className="w-5 h-5" />
        </div>
      </div>
      </div>
    </div>
  );
}
