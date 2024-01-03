import React, { useState, useEffect } from "react";
import logo from "../../public/Logo.png";

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

  return <img className="w-[950px] h-[950px]" src={logo} style={style} />;
}

export default Logo;
