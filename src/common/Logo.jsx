import React, { useState, useEffect } from "react";

function Logo() {
  const [style, setStyle] = useState({
    opacity: 0,
    transition: "opacity 3s ease",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle((res) => ({
        ...res,
        opacity: 1,
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      className="w-[950px] h-[950px]"
      src={"../../public/Logo.png"}
      style={style}
    />
  );
}

export default Logo;
