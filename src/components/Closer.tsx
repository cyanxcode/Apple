import image from "../assets/all_colors.jpg";

const Closer = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center gap-28 p-28 ">
      <div className="text-6xl font-semibold text-neutral-400 place-self-start">
        Take a closer look.
      </div>
      <img src={image} alt="" />
    </main>
  );
};

export default Closer;
