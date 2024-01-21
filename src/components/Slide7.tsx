import pro from "../assets/pro.jpg";
import base from "../assets/base.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Shop = () => {
  return (
    <main className="w-full bg-neutral-950 flex items-center flex-col gap-32 pt-40">
      <div className="flex flex-col lg:flex-row justify-between w-10/12 lg:items-center gap-4">
        <div className="text-3xl lg:text-5xl font-semibold text-neutral-400 place-self-start">
          Keep exploring iPhone.
        </div>
        <div className="text-lg lg:text-2xl text-blue-600 hover:underline">
          Explore all iPhones
        </div>
      </div>
      <div className="flex gap-10 justify-center">
        <div className="flex flex-col items-center gap-4 relative w-[35vw] lg:w-[30vw]">
          <img
            src={pro}
            className=" absolute lg:hover:scale-105 transition ease-in-out duration-300"
          />
          <div className="text-orange-500 text-xs font-semibold mt-[55vw] lg:mt-[28rem]">
            New
          </div>
          <div className="text-white font-semibold text-xl lg:text-3xl">
            iPhone 15 Pro
          </div>
          <div className="text-white text-base lg:text-xl">From ₹134900.00</div>
          <button className="bg-blue-500 rounded-full text-white py-2 px-12 font-semibold">
            Buy
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 relative w-[35vw] lg:w-[30vw]">
          <img
            src={base}
            className="absolute lg:hover:scale-105 transition ease-in-out duration-300"
          />
          <div className="text-orange-500 text-xs font-semibold mt-[55vw] lg:mt-[28rem]">
            New
          </div>
          <div className="text-white font-semibold text-xl lg:text-3xl">
            iPhone 15 Pro
          </div>
          <div className="text-white text-base lg:text-xl">From ₹134900.00</div>
          <button className="bg-blue-500 rounded-full text-white py-2 px-12 font-semibold">
            Buy
          </button>
        </div>
      </div>
      <hr className=" w-10/12 lg:w-6/12 h-px my-[-3rem] bg-zinc-500 border-0" />
      <div className="grid grid-cols-2 grid-rows-3 gap-x-6 lg:gap-x-40 gap-y-8">
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon1} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            A17 Pro chip with 6-core GPU
          </div>
        </div>
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon2} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            A16 Bionic chip with 5-core GPU
          </div>
        </div>
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon3} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            Pro camera system
          </div>
          <div className="text-white text-sm lg:text-center">
            Our most advanced 48MP Main camera 3x or 5x Telephoto camera Ultra
            Wide camera
          </div>
        </div>
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon4} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            Advanced dual-camera system
          </div>
          <div className="text-white text-sm lg:text-center lg:pl-10">
            48MP Main camera <br />
            2x Telephoto
            <br /> Ultra Wide camera
          </div>
        </div>
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon5} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            Up to 29 hours video playback
          </div>
        </div>
        <div className="lg:w-64 flex flex-col items-start pl-6 gap-4">
          <img src={icon6} alt="" />
          <div className="text-white text-xl lg:text-center font-semibold pr-4">
            Up to 26 hours video playback
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
