import React, { useEffect, useState, ReactNode } from "react";

interface RandomBackgroundProps {
  children: ReactNode;
}
const Background = ({ children }: RandomBackgroundProps) => {
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const backgroundImages = [
    "/assets/bg1.png",
    "/assets/bg2.png",
    "/assets/bg3.png",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    setBackgroundUrl(`url('${randomImage}')`);
  }, []);

  return (
    <div
      style={{
        background: `${backgroundUrl} `,
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};


export default Background;
