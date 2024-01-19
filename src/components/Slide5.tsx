import chip from "../assets/chip.jpg";
import phone from "../assets/iphone-15.png";
import pubg from "../assets/pubg.jpg";
import chamelleon from "../assets/chamelleon.jpg";

const Phone = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center ">
      <img src={chip} className="mt-0 sm:mt-48 size-32 sm:size-44" />
      <div className="text-3xl sm:text-7xl font-bold text-white mt-10 sm:mt-20">
        A17 Pro chip.
      </div>
      <div className="text-3xl sm:text-7xl font-bold text-white text-center">
        A monster win for gaming.
      </div>
      <div className="text-lg sm:text-3xl font-semibold text-neutral-400 mt-10 text-center px-5">
        It’s here. The biggest redesign in the history of Apple GPUs.
      </div>
      <div className="w-9/12 mt-10 sm:mt-32 relative mb-[60vw] sm:mb-[40vw]">
        <img src={phone} className="w-full aspect-video z-20 absolute" />
        <img
          src={pubg}
          className="m-3 rounded-[65px] w-[calc(100%-2rem)] aspect-video object-cover absolute top-0 z-10 "
        ></img>
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-[6vw]">
        <div className="text-lg sm:text-xl font-medium text-gray-400 p-5 sm:py-20 sm:px-[10vw] sm:w-3/6">
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
        <div className="text-lg sm:text-xl font-medium text-gray-400 p-5 sm:p-20 sm:w-3/6">
          New <br />{" "}
          <b className="text-white text-3xl sm:text-5xl">Pro-class GPU</b>
          <br /> with 6 cores
        </div>
      </div>
      <div className="text-3xl sm:text-7xl font-semibold text-white pt-48 px-[10vw]">
        A camera that captures your wildest imagination.
      </div>
      <div className="text-lg sm:text-2xl font-medium text-neutral-400 p-[10vw]">
        From dramatic framing flexibility to next-generation portraits, see what
        you can do with our most powerful iPhone camera system.
      </div>
      <img src={chamelleon} alt="" />
    </main>
  );
};

export default Phone;
