import image from "../assets/all_colors.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Closer = () => {
  useGSAP(() => {
    gsap
      .fromTo(
        "#closelook",
        { y: "120%", autoAlpha: "0" },
        { y: "0%", autoAlpha: "100%", scrollTrigger: ".slide3" }
      )
      .duration(1.5);
  });
  return (
    <main className="slide3 w-full sm:min-h-screen bg-black flex flex-col items-center gap-28 p-6 sm:p-28 ">
      <div
        id="closelook"
        className="text-2xl sm:text-6xl font-semibold text-neutral-400 place-self-start"
      >
        Take a closer look.
      </div>
      <img src={image} className="" />
    </main>
  );
};

export default Closer;
