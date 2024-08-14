import user from "../public/assets/anonym.jpg";
import Image from "next/image";
import Naviagtion from "./Navigation";
import LogInBtn from "./LogInBtn";

export default function Header() {
  return (
    <div className="w-full flex  py-[15px] px-[20px] items-center justify-between ">
      <div className="flex items-center justify-between   ">
        {" "}
        <Image
          src={user}
          alt="user-img"
          width={50}
          height={50}
          className="mr-[15px]"
        />
        <Naviagtion />
      </div>
      <div>
        <LogInBtn />
      </div>
    </div>
  );
}
