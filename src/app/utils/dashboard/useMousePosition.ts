import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMovement(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);

    return () => window.removeEventListener("mousemove", handleMouseMovement);
  });

  return mousePosition;
}
