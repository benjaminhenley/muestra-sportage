import { useRef } from "react";
import upIcon from "../assets/chevron-up.svg";
import downIcon from "../assets/chevron-down.svg";
export const VerticalScrollbar = ({value, onChange, height = 320}) => {
    const trackRef  = useRef(null);

//     const clamp = (n, min = 0, max = 100) => Math.min(Math.max(n, min), max);
    
//     const posToValue = (clientY) => {
//     const rect = trackRef.current.getBoundingClientRect();
//     const y = clamp(clientY - rect.top, 0, rect.height);
//     return (y / rect.height) * 100;
//   };

//     const handleMouseDown = (e) => {
//         const startY = e.clientY;
//         const startValue = value;
//         const onMouseMove = (e) => {
//             const deltaY = e.clientY - startY;
//             const newValue = Math.min(100, Math.max(0, startValue + (deltaY / height) * 100));
//             onChange(newValue);
//         }
//         const onMouseUp = () => {
//             document.removeEventListener("mousemove", onMouseMove);
//             document.removeEventListener("mouseup", onMouseUp);
//         }
//         document.addEventListener("mousemove", onMouseMove);
//         document.addEventListener("mouseup", onMouseUp);
//         e.preventDefault();
//     };

    return (
    <div className="fixed top-0 right-0 h-full w-2 bg-gray-200">
        <div className="h-full w-full bg-gray-400 animate-pulse"></div>
    </div>
    );
}
