import React ,{useState} from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";


import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
   const [menuOpened, setMenuOpened] = useState(false);
   const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <=800){
      return {right:!menuOpened && "-100%"};
    }
   };
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img className="logo1" src="./logo1.png" alt="logo" width={200} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        ></OutsideClickHandler>
        <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a
            href="#res"
            className="h-menu-1 no-underline hover:underline hover:text-sky-600 "
          >
            Residencies
          </a>
          <a
            href="#val"
            className="h-menu-2 no-underline hover:underline hover:text-sky-600 "
          >
            Our Values
          </a>
          <a
            href="#cont"
            className="h-menu-3 no-underline hover:underline hover:text-sky-600"
          >
            Contact Us
          </a>
          <a
            href="#gets"
            className="h-menu-4 no-underline hover:underline hover:text-sky-600"
          >
            Get Started
          </a>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   hover:scale-110 hover:-translate-y-1.5 text-white font-bold py-2 px-4 rounded ">
            <a href="mailto:manjunadhadandibhotla@gmail.com">Contact</a>
          </button>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
