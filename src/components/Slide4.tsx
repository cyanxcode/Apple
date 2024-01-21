import video from "../assets/large_2x.mp4";
import zoom1 from "../assets/zoom1.jpg";
import zoom2 from "../assets/zoom2.jpg";

const Explore = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-950 flex flex-col items-center">
      <div className="text-2xl sm:text-5xl font-semibold text-neutral-400 place-self-start ml-6 sm:ml-32 mt-40">
        Explore the full story.
      </div>
      <div className="text-4xl sm:text-7xl font-semibold text-white place-self-start ml-6 sm:ml-[20vw] mt-20 sm:mt-40 mb-20">
        iPhone. <br /> Forged in titanium.
      </div>
      <div className="grid w-full sm:w-10/12 lg:w-8/12 lg:8/12 gap-[3vw] box-border mb-40 place-content-center">
        <div className="sm:col-span-2 my-14 sm:my-0">
          <video src={video} autoPlay muted className=""></video>
        </div>
        <div className="aspect-square sm:w-[45vw] lg:w-[30vw]">
          <img src={zoom1} className="size-full overflow-hidden" />
        </div>
        <div className="aspect-square sm:w-[45vw] lg:w-[30vw]">
          <img src={zoom2} className="size-full overflow-hidden" />
        </div>
        <div className="mt-20 sm:mt-0 text-lg sm:text-xl font-medium text-gray-400 p-6">
          iPhone 15 Pro is{" "}
          <b className="text-white">
            the first iPhone to feature an aerospace‑grade titanium design,
          </b>{" "}
          using the same alloy that spacecraft use for missions to Mars.
        </div>
        <div className="text-lg sm:text-xl font-medium text-gray-400 p-6">
          Titanium has one of the best strength‑to‑weight ratios of any metal,
          making these our
          <b className="text-white">lightest Pro models ever.</b> You’ll notice
          the difference the moment you pick one up.
        </div>
      </div>
    </main>
  );
};

export default Explore;
