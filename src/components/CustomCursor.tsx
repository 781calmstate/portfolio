import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const CURSOR_SIZE = 96;
const SMOOTH_OPTIONS = { stiffness: 1000, damping: 40 };

export const CustomCursor = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, SMOOTH_OPTIONS),
    y: useSpring(mouse.y, SMOOTH_OPTIONS),
  };

  useEffect(() => {
    const handleCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      mouse.x.set(clientX - CURSOR_SIZE / 2);
      mouse.y.set(clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener("mousemove", handleCursor);

    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      className="fixed h-24 w-24 rounded-full blur-3xl pointer-events-none z-50 bluredCursorGlow"
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y,
      }}
    ></motion.div>
  );
};
