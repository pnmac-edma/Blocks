import { useEffect, useState } from "react";

export const useMouseData = () => {
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  const [velocity, setVelocity] = useState({ speedX: 0, speedY: 0 });

  let timestamp = null;
  let lastMouseX = null;
  let lastMouseY = null;

  const updateData = event => {
    const { clientX, clientY } = event;
    let now = Date.now();
    let dt =  now - timestamp;
    let dx = clientX - lastMouseX;
    let dy = clientY - lastMouseY;
    let speedX = 1 + Math.round(dx * dt / 500);
    let speedY = 1 + Math.round(dy * dt / 500);

    if (speedX < 0)
      speedX = speedX * -1;

    if (speedY < 0)
      speedY = speedY * -1;

    speedX = 1 + speedX / 20;
    speedY = 1 + speedY / 20;

    setPosition({
      clientX,
      clientY
    });

    if (timestamp === null) {
      timestamp = Date.now();
      lastMouseX = clientX;
      lastMouseY = clientY;

      setVelocity({
        speedX,
        speedY
      });

      return;
    }

    timestamp = now;
    lastMouseX = clientX;
    lastMouseY = clientY;

    setVelocity({
      speedX,
      speedY
    });

  };

  useEffect(() => {
    document.body.addEventListener("mousemove", updateData);
    document.body.addEventListener("mouseenter", updateData);

    return () => {
      document.body.removeEventListener("mousemove", updateData);
      document.body.removeEventListener("mouseenter", updateData);
    };
  }, [updateData]);

  return ({position, velocity});
};
