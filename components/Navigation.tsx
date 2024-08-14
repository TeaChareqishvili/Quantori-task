export default function Navigation() {
  return (
    <nav className="flex justify-center ml-[15px]">
      <ul className="flex items-center justify-center bg-white rounded-full border border-[#66837e]  ">
        <li className="bg-[#66837e] h-full text-[#eaefef] rounded-l-full px-4 py-3 cursor-pointer hover:bg-[#556e6b] transition-colors duration-300">
          Home
        </li>
        <li className="text-[#66837e] h-full px-4 py-3 cursor-pointer hover:bg-[#e6efef] transition-colors duration-300">
          Contact
        </li>
        <li className="text-[#66837e] h-full rounded-r-full px-4 py-3 cursor-pointer hover:bg-[#e6efef] transition-colors duration-300">
          About
        </li>
      </ul>
    </nav>
  );
}
