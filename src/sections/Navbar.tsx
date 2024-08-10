import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../assets/pokeball-icon.png";

function Navbar() {

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="" />
      </div>
      <div className="data"></div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;