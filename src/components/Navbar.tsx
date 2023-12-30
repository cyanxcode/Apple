import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="w-full h-12 flex justify-center items-center gap-20 z-20">
      <FaApple size="20" color="white" />
      <div className=" text-gray-300 text-xs cursor-pointer">Store</div>
      <div className=" text-gray-300 text-xs cursor-pointer">Mac</div>
      <div className=" text-gray-300 text-xs cursor-pointer">iPad</div>
      <div className=" text-gray-300 text-xs cursor-pointer">iPhone</div>
      <div className=" text-gray-300 text-xs cursor-pointer">Watch</div>
      <div className=" text-gray-300 text-xs cursor-pointer">AirPods</div>
      <IoIosSearch size="20" color="white" />
      <IoBagOutline size="18" color="white" />
    </nav>
  );
};

export default Navbar;
