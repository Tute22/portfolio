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

  // Clases de Tailwind para responsividad y tamaño fijo en escritorio
  return (
    <div>
      <img
        className="w-full h-auto md:w-[950px] md:h-[950px] "
        src={logo}
        style={style}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
