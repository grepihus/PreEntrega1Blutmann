import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/style.css";
import CartWidget from "../CartWidget/Cart.js";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>CAFE</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">about</a>
        <a href="/#">menu</a>
        <a href="/#">products</a>
        <a href="/#">review</a>
        <a href="/#">contacts</a>
        <a href="/#">
          <CartWidget />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
