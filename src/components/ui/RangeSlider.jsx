import React from "react";

export default function RangeSlider({
  min = 0,
  max = 8,
  step = 1,
  value,
  onChange,
  className = "w-full max-w-xl",
}) {
  const count = Math.floor((max - min) / step) + 1;

  // sizes (px) – keep these in sync with CSS below
  const thumb = 16;
  const track = 2;

  return (
    <div
      className={`relative ${className} md:-mt-10 `}
      style={{
        "--thumb-size": `${thumb}px`,
        "--track-size": `${track}px`,
      }}>
      {/* slider (on top) */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className="
          slider relative z-10 mb-3.5
          appearance-none w-full max-w-[578px]
          h-[var(--track-size)]
          rounded bg-[#9BA1A5]
          outline-none
        "
      />

      {/* dots (underneath) */}
      <div
        className="
          pointer-events-none
          absolute left-0 right-0  md:-mt-[5px] top-1/2 -translate-y-1/2
          flex justify-between
          z-0
        ">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="block h-2 w-2 rounded-full bg-[#9BA1A5]" />
        ))}
      </div>
      {/* local CSS for pseudo-elements that Tailwind can't reach */}
      <style>{`
        .slider {
          /* make sure the thumb isn't clipped */
        }

        /* WebKit */
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 9999px;
          background: #fff;
          border: 1px solid #d1d5db; /* gray-300 */
          /* center the thumb on the track regardless of sizes */
          cursor: pointer;
          /* visual lift so it clearly sits over dots */
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
          position: relative; /* create stacking context for z-index */
          z-index: 20;
          margin-top: 0px;
        }

        /* Firefox */
        .slider::-moz-range-thumb {
          height: var(--thumb-size);
          width: var(--thumb-size);
          border-radius: 9999px;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
          position: relative;
          z-index: 20;
        }
        .slider::-moz-range-track {
          height: var(--track-size);
          background: transparent; /* Tailwind handles the visible track */
        }
      `}</style>
    </div>
  );
}
