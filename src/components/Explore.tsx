import video from "../assets/large_2x.mp4";
import zoom1 from "../assets/zoom1.jpg";
import zoom2 from "../assets/zoom2.jpg";

const Explore = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-900 flex flex-col items-center ">
      <div className="text-5xl font-semibold text-neutral-400 place-self-start ml-32 mt-40">
        Explore the full story.
      </div>
      <div className="text-7xl font-semibold text-white place-self-start ml-64 mt-40 mb-20">
        iPhone. <br /> Forged in titanium.
      </div>
      <div className="grid w-8/12 overflow-hidden gap-5 box-border mb-40">
        <div className="col-span-2 ">
          <video src={video} autoPlay muted className=""></video>
        </div>
        <div className="aspect-square">
          <img src={zoom1} className="size-full overflow-hidden" />
        </div>
        <div className="aspect-square">
          <img src={zoom2} className="size-full overflow-hidden" />
        </div>
        <div className="text-xl font-medium text-gray-400 p-20">
          iPhone 15 Pro is{" "}
          <b className="text-white">
            the first iPhone to feature an aerospace‑grade titanium design,
          </b>{" "}
          using the same alloy that spacecraft use for missions to Mars.
        </div>
        <div className="text-xl font-medium text-gray-400 p-20">
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
