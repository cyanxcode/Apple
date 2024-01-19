import image from "../assets/all_colors.jpg";

const Closer = () => {
  return (
    <main className="w-full sm:min-h-screen bg-black flex flex-col items-center gap-28 p-6 sm:p-28 ">
      <div className="text-2xl sm:text-6xl font-semibold text-neutral-400 place-self-start">
        Take a closer look.
      </div>
      <img src={image} className="" />
    </main>
  );
};

export default Closer;
