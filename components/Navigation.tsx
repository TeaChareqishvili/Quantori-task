export default function Navigation() {
  return (
    <nav className="flex justify-center ml-[15px]">
      <ul className="flex flex-col md:flex-row items-center justify-center md:bg-white md:rounded-full md:border md:border-[#66837e]">
        <li className="text-[#66837e] text-[26px] font-bold md:font-normal  md:text-[18px]  px-4 py-3 cursor-pointer hover:bg-[#e6efef] rounded-md transition-colors duration-300 md:bg-[#66837e] md:text-[#eaefef] md:rounded-l-full md:hover:bg-[#556e6b]">
          Home
        </li>
        <li className="text-[#66837e] text-[26px] font-bold md:font-normal md:text-[18px] px-4 py-3 cursor-pointer hover:bg-[#e6efef] rounded-md transition-colors duration-300 md:h-full">
          Contact
        </li>
        <li className="text-[#66837e] text-[26px] font-bold md:font-normal  md:text-[18px] px-4 py-3 cursor-pointer hover:bg-[#e6efef] rounded-md transition-colors duration-300 md:rounded-r-full">
          About
        </li>
      </ul>
    </nav>
  );
}
