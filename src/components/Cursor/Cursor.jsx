import React, { useState, useEffect, useRef } from "react";
import { FaSmile } from "react-icons/fa";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      const newX = (target.x - position.x) * 0.1 + position.x;
      const newY = (target.y - position.y) * 0.1 + position.y;
      setPosition({ x: newX, y: newY });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [target]);

  return (
    <FaSmile
      className="cursor-emoji"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
