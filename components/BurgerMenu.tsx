import { IoCloseSharp } from "react-icons/io5";
import Navigation from "./Navigation";
import LogInBtn from "./LogInBtn";

interface BurgerMenuProps {
  handleCloseMenu: () => void;
}

export default function BurgerMenu({ handleCloseMenu }: BurgerMenuProps) {
  return (
    <div className="absolute right-0 top-0 z-20 bg-[#a8b6bf] h-screen w-[50%] animation p-[20px]">
      <IoCloseSharp
        className="w-[35px] h-[35px] text-[#eaefef] cursor-pointer "
        onClick={handleCloseMenu}
      />
      <div className="mt-[20px] mb-[20px]">
        <Navigation />
      </div>
      <div className="flex items-center justify-center ml-[10px]">
        {" "}
        <LogInBtn />
      </div>
    </div>
  );
}
