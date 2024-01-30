import video from "../assets/A17chip.mp4";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Highlight = () => {
  useGSAP(() => {
    gsap
      .fromTo(
        "#highlight",
        {
          y: "120%",
          autoAlpha: "0%",
        },
        {
          y: "0%",
          autoAlpha: "100%",
          scrollTrigger: ".slide2",
        }
      )
      .duration(2);
  });
  return (
    <main className="slide2 w-full lg:min-h-screen bg-neutral-950 flex flex-col items-center mt-32">
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full p-6 xl:p-28 xl:pb-12">
        <div
          id="highlight"
          className="text-2xl lg:text-4xl xl:text-6xl font-semibold text-neutral-400 "
        >
          Get the highlights.
        </div>
        <div
          id="highlight"
          className="text-lg lg:text-xl xl:text-2xl text-blue-600 hover:underline"
        >
          Watch the event.
        </div>
      </div>
      <div className="relative w-11/12 rounded-3xl overflow-hidden mb-20 ">
        <div className="text-white text-xl xl:text-2xl font-medium absolute top-12 left-12">
          Enter A17 Pro. <br /> Game-changing chip. <br />
          Groundbreaking performance.
        </div>
        <video
          src={video}
          autoPlay
          muted
          className=" w-full mt-44 xl:mt-0"
        ></video>
      </div>
    </main>
  );
};

export default Highlight;
