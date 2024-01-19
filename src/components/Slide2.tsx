import video from "../assets/A17chip.mp4";

const Highlight = () => {
  return (
    <main className="w-full lg:min-h-screen bg-neutral-950 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full p-6 lg:p-28 lg:pb-12">
        <div className="text-2xl lg:text-6xl font-semibold text-neutral-400 ">
          Get the highlights.
        </div>
        <div className="text-lg lg:text-2xl text-blue-600 hover:underline">
          Watch the event.
        </div>
      </div>
      <div className="relative w-11/12 rounded-3xl overflow-hidden mb-20 lg:mb-48">
        <div className="text-white text-xl lg:text-3xl font-medium absolute top-12 left-12">
          Enter A17 Pro. <br /> Game-changing chip. <br />
          Groundbreaking performance.
        </div>
        <video
          src={video}
          autoPlay
          muted
          className=" w-full mt-44 lg:mt-0"
        ></video>
      </div>
    </main>
  );
};

export default Highlight;
