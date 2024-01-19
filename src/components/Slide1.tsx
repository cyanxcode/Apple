import video from "../assets/titanium.mp4";

const Titanium = () => {
  return (
    <div className="z-10 flex justify-center items-center h-screen">
      <div className=" text-xl sm:text-3xl font-medium text-yellow-50 opacity-60 absolute top-20 sm:top-48">
        iPhone 15 Pro
      </div>
      <video src={video} autoPlay muted className=" w-full sm:w-9/12 "></video>
      <a
        href=""
        className=" w-16 h-10 bg-blue-600 text-white rounded-3xl text-center leading-10 absolute bottom-44"
      >
        Buy
      </a>
      <div className="text-base sm:text-2xl text-white font-medium absolute bottom-32">
        From ₹21483.00/mo.‡ or ₹134900.00*
      </div>
    </div>
  );
};

export default Titanium;
