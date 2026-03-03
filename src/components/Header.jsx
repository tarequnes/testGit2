import { useState } from "react";
import style from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.logo}>eComm App</div>

      {/* Hamburger button */}
      <div
        className={style.hamburger}
        onClick={() => setIsOpen(prev => !prev)}
      >
        ☰
      </div>
       
      <nav className={`${style.nav} ${isOpen ? style.active : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
        <a href="#aboutUS" onClick={() => setIsOpen(false)}>About US</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
