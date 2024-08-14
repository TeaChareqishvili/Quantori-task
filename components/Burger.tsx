"use client";

import { useState } from "react";
import burger from "../public/assets/burger_menu.svg";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Burger() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  // fucntion to open and close burger menu
  const handleOpenMenu = () => {
    setBurgerMenu(true);
  };

  const handleCloseMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <div className="md:hidden flex">
      <Image
        src={burger}
        alt="burger-menu"
        width={50}
        height={50}
        className="cursor-pointer border border-[#66837e] p-[10px] rounded-md"
        onClick={handleOpenMenu}
      />
      {burgerMenu && <BurgerMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
}
