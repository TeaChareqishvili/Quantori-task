import Naviagtion from "./Navigation";
import LogInBtn from "./LogInBtn";
import User from "./User";
import Burger from "./Burger";

export default function Header() {
  return (
    <div className="w-full flex  py-[15px] px-[20px] items-center justify-between ">
      <div className="flex items-center justify-between   ">
        {" "}
        <User />
        <div className="md:flex hidden">
          <Naviagtion />
        </div>
      </div>
      <div>
        {" "}
        <div className="md:flex hidden">
          <LogInBtn />
        </div>
        <Burger />
      </div>
    </div>
  );
}
