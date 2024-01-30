import chip from "../assets/chip.jpg";
import phone from "../assets/iphone-15.png";
import pubg from "../assets/pubg.jpg";
import chamelleon from "../assets/chamelleon.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Phone = () => {
  useGSAP(() => {
    gsap
      .fromTo(
        "#chip-5",
        { scale: "1.5", autoAlpha: "0.2" },
        { scale: "1", autoAlpha: "1" }
      )
      .duration(1.5);
    gsap
      .fromTo(
        "#text-5",
        { y: "30%", autoAlpha: "0" },
        { y: "0%", autoAlpha: "100%", scrollTrigger: "#text-5" }
      )
      .duration(1);
    gsap
      .fromTo(
        "#chamelleon",
        { scale: "2", autoAlpha: "0.1" },
        {
          scale: "1",
          autoAlpha: "1",
          scrollTrigger: { trigger: "#chamelleon" },
        }
      )
      .duration(0.5);
  });
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center ">
      <img
        id="chip-5"
        src={chip}
        className="mt-0 lg:mt-48 size-32 lg:size-44"
      />
      <div className="text-3xl lg:text-7xl font-bold text-white mt-10 lg:mt-20">
        A17 Pro chip.
      </div>
      <div className="text-3xl lg:text-7xl font-bold text-white text-center">
        A monster win for gaming.
      </div>
      <div className="text-lg lg:text-3xl font-semibold text-neutral-400 mt-10 text-center px-5">
        It’s here. The biggest redesign in the history of Apple GPUs.
      </div>
      <div className="w-9/12 mt-10 lg:mt-32 relative mb-[60vw] lg:mb-[40vw]">
        <img src={phone} className="w-full aspect-video z-20 absolute" />
        <img
          src={pubg}
          className="m-3 rounded-[65px] w-[calc(100%-2rem)] aspect-video object-cover absolute top-0 z-10 "
        ></img>
      </div>
      <div
        id="text-5"
        className="flex flex-col lg:flex-row justify-around gap-[6vw]"
      >
        <div className="text-lg lg:text-xl font-medium text-gray-400 p-5 lg:py-20 lg:px-[10vw] lg:w-3/6">
          A17 Pro is an entirely new class of iPhone chip that delivers our
          <b className="text-white"> best graphics performance by far.</b>
          <br />
          Mobile{" "}
          <b className="text-white">
            games will look and feel so immersive,
          </b>{" "}
          with incredibly detailed environments and more realistic characters.
          And with industry-leading speed and efficiency, A17 Pro takes fast and
          runs with it.
        </div>
        <div className="text-lg lg:text-xl font-medium text-gray-400 p-5 lg:p-20 lg:w-3/6">
          New <br />{" "}
          <b className="text-white text-3xl lg:text-5xl">Pro-class GPU</b>
          <br /> with 6 cores
        </div>
      </div>
      <div className="text-3xl lg:text-7xl font-semibold text-white pt-48 px-[10vw]">
        A camera that captures your wildest imagination.
      </div>
      <div className="text-lg lg:text-2xl font-medium text-neutral-400 p-[10vw]">
        From dramatic framing flexibility to next-generation portraits, see what
        you can do with our most powerful iPhone camera system.
      </div>
      <img id="chamelleon" src={chamelleon} alt="" />
    </main>
  );
};

export default Phone;
