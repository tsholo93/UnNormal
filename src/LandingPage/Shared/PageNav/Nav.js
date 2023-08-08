import { useState, useEffect, useRef } from "react";
import menuIcon from "./icons8-menu-80(1).png";
import closeIcon from "./icons8-close-80(1).png";
import quoteIcon from "../../Hero/assets/icons8-chat-100.png";
import "./Nav.css";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  let screenWidth = Math.max(
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
  );

  useEffect(() => {
    function handleResize() {
      screenWidth = Math.max(
        document.body.offsetWidth,
        document.documentElement.offsetWidth
      );

       if(screenWidth > 998) {
         setIsActive(false);
       }
    }


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])


  return (
    <nav className="UnNormal-page-nav">
      <Toggler
        toggle={isActive}
        onToggle={() => setIsActive(!isActive)}
      />
      <MenuList
        isOpen={isActive}
      />
    </nav>
  )
}


function Toggler({ toggle, onToggle }) {
  let openImage = menuIcon;
  let closeImage = closeIcon;
  let toggleImage = (toggle) ? closeImage : openImage;

  return (
    <button className="menu-toggler" onClick={onToggle}>
        <img src={toggleImage}/>
    </button>
  )
}

function MenuList({ isOpen }) {
  /*
  const navRef = useRef();
  let screenWidth = Math.max(
    document.body.offsetWidth, document.documentElement.offsetWidth,
  );
*/
  let openNav = isOpen ? 'open' : '';
/*
  useEffect(() => {
    function handleResize() {

        screenWidth = Math.max(document.body.offsetWidth, document.documentElement.offsetWidth,
        )

       if(screenWidth > 998) {

         navRef.current.classList.remove("open")
         console.log(navRef)
       }
       console.log(screenWidth)
    }


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])*/
  return (
    <ul className={`menu-list ${openNav}`}>
      <div className="menu-list-wrapper">
        <li><a href="#0" className="link">About</a></li>
        <li><a href="#0" className="link">Features</a></li>
        <li><a href="#0" className="link">Works</a></li>
        <li><a href="#0" className="link">Blog</a></li>
        <li><a href="#0" className="link">Shop</a></li>
        <li><a href="#0" className="link">Contact</a></li>
      </div>
      <li className="UnNormal-specialBtn">
        <a href="#0" className="link">
          <img src={quoteIcon} />
          Get a quote
        </a>
      </li>
    </ul>
  )

}


