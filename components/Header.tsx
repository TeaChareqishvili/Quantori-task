import Naviagtion from "./Navigation";
import LogInBtn from "./LogInBtn";
import User from "./User";

export default function Header() {
  return (
    <div className="w-full flex  py-[15px] px-[20px] items-center justify-between ">
      <div className="flex items-center justify-between   ">
        {" "}
        <User />
        <Naviagtion />
      </div>
      <div>
        <LogInBtn />
      </div>
    </div>
  );
}
