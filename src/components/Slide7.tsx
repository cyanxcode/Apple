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
    <main className="w-9/12 bg-neutral-950 flex items-center flex-col gap-32 pt-40">
      <div className="flex justify-between w-10/12 items-center">
        <div className="text-5xl font-semibold text-neutral-400 place-self-start">
          Keep exploring iPhone.
        </div>
        <div className="text-2xl text-blue-600 hover:underline">
          Explore all iPhones
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-col items-center gap-4 relative w-[18rem]">
          <img
            src={pro}
            className=" absolute hover:scale-105 transition ease-in-out duration-300"
          />
          <div className="text-orange-500 text-xs font-semibold mt-[26rem]">
            New
          </div>
          <div className="text-white font-semibold text-3xl">iPhone 15 Pro</div>
          <div className="text-white text-xl">From ₹134900.00</div>
          <button className="bg-blue-500 rounded-full text-white py-2 px-12 font-semibold">
            Buy
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 relative w-[18rem]">
          <img
            src={base}
            className="absolute hover:scale-105 transition ease-in-out duration-300"
          />
          <div className="text-orange-500 text-xs font-semibold mt-[26rem]">
            New
          </div>
          <div className="text-white font-semibold text-3xl">iPhone 15 Pro</div>
          <div className="text-white text-xl">From ₹134900.00</div>
          <button className="bg-blue-500 rounded-full text-white py-2 px-12 font-semibold">
            Buy
          </button>
        </div>
      </div>
      <hr className="w-6/12 h-px my-[-3rem] bg-zinc-500 border-0" />
      <div className="grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-8">
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon1} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            A17 Pro chip with 6-core GPU
          </div>
        </div>
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon2} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            A16 Bionic chip with 5-core GPU
          </div>
        </div>
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon3} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            Pro camera system
          </div>
          <div className="text-white text-sm text-center">
            Our most advanced 48MP Main camera 3x or 5x Telephoto camera Ultra
            Wide camera
          </div>
        </div>
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon4} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            Advanced dual-camera system
          </div>
          <div className="text-white text-sm text-center">
            48MP Main camera <br />
            2x Telephoto
            <br /> Ultra Wide camera
          </div>
        </div>
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon5} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            Up to 29 hours video playback
          </div>
        </div>
        <div className="w-64 flex flex-col items-center gap-4">
          <img src={icon6} alt="" />
          <div className="text-white text-2xl font-semibold text-center">
            Up to 26 hours video playback
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
