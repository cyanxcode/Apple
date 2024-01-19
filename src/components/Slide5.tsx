import chip from "../assets/chip.jpg";
import phone from "../assets/iphone-15.png";
import pubg from "../assets/pubg.jpg";
import chamelleon from "../assets/chamelleon.jpg";

const Phone = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center ">
      <img src={chip} className="mt-48" />
      <div className="text-7xl font-bold text-white mt-20">A17 Pro chip.</div>
      <div className="text-7xl font-bold text-white ">
        A monster win for gaming.
      </div>
      <div className="text-3xl font-semibold text-neutral-400 mt-10">
        It’s here. The biggest redesign in the history of Apple GPUs.
      </div>
      <div className="w-9/12 mt-32 relative mb-[40rem]">
        <img src={phone} className="w-full aspect-video z-20 absolute" />
        <img
          src={pubg}
          className="m-3 rounded-[65px] w-[calc(100%-2rem)] aspect-video object-cover absolute top-0 z-10 "
        ></img>
      </div>
      <div className="flex ml-56 mr-56">
        <div className="text-xl font-medium text-gray-400 p-20 w-3/6">
          A17 Pro is an entirely new class of iPhone chip that delivers our
          <b className="text-white"> best graphics performance by far.</b>{" "}
          Mobile{" "}
          <b className="text-white">games will look and feel so immersive,</b>{" "}
          with incredibly detailed environments and more realistic characters.
          And with industry-leading speed and efficiency, A17 Pro takes fast and
          runs with it.
        </div>
        <div className="text-xl font-medium text-gray-400 p-20 w-3/6">
          New <b className="text-white text-5xl">Pro-class GPU</b> with 6 cores
        </div>
      </div>
      <div className="text-7xl font-semibold text-white ml-[20rem] me-[20rem] mt-[10rem]">
        A camera that captures your wildest imagination.
      </div>
      <div className="text-2xl font-medium text-neutral-400 mt-10 ml-[20rem] me-[20rem]">
        From dramatic framing flexibility to next-generation portraits, see what
        you can do with our most powerful iPhone camera system.
      </div>
      <img src={chamelleon} alt="" />
    </main>
  );
};

export default Phone;
