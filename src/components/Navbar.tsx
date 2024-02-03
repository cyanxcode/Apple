import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
const Navbar = () => {
  //Just a random comment.
  return (
    <nav
      id="nav"
      className="absolute w-full h-12 flex justify-between lg:justify-center items-center gap-[5vw] z-20 px-10"
    >
      <FaApple size="20" color="white" />
      <div className=" h-12 flex w-0 collapse lg:visible lg:w-auto justify-center items-center gap-[5vw] z-20">
        <div className=" text-gray-300 text-xs cursor-pointer">Store</div>
        <div className=" text-gray-300 text-xs cursor-pointer">Mac</div>
        <div className=" text-gray-300 text-xs cursor-pointer">iPad</div>
        <div className=" text-gray-300 text-xs cursor-pointer">iPhone</div>
        <div className=" text-gray-300 text-xs cursor-pointer">Watch</div>
        <div className=" text-gray-300 text-xs cursor-pointer">AirPods</div>
      </div>
      <div className="h-12 flex justify-center items-center gap-[5vw] z-20 ">
        <IoIosSearch size="20" color="white" />
        <IoBagOutline size="18" color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
