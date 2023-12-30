import video from "../assets/A17chip.mp4";

const Highlight = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-900 flex flex-col items-center">
      <div className="flex items-center justify-between w-full p-28 pb-12">
        <div className="text-6xl font-semibold text-neutral-400 ">
          Get the highlights.
        </div>
        <div className="text-2xl text-blue-600 hover:underline">
          Watch the event.
        </div>
      </div>
      <div className="relative w-10/12 rounded-3xl overflow-hidden mb-32">
        <div className="text-white text-3xl font-medium absolute top-12 left-12">
          Enter A17 Pro. <br /> Game-changing chip. <br />
          Groundbreaking performance.
        </div>
        <video src={video} autoPlay muted className=" w-full "></video>
      </div>
    </main>
  );
};

export default Highlight;
