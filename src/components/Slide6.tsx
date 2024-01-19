import p1 from "../assets/phone-1.jpg";
import p2 from "../assets/phone-2.jpg";
import p3 from "../assets/phone-3.jpg";

const IOS = () => {
  return (
    <main className="w-full lg:w-9/12 bg-neutral-900 p-10 lg:p-32 box-border">
      <div className="text-3xl lg:text-6xl font-semibold text-neutral-400 place-self-start">
        iOS 17.
      </div>
      <div className="text-3xl lg:text-6xl font-semibold text-white place-self-start">
        Style it out. Swap it over. <br /> Sticker it up.
      </div>
      <div className="flex gap-8 p-5 box-border mt-24 justify-center">
        <img src={p1} className="w-[24vw] lg:w-[15vw]" />
        <img src={p2} className="w-[24vw] lg:w-[15vw]" />
        <img src={p3} className="w-[24vw] lg:w-[15vw]" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 p-5 box-border mt-12 justify-center">
        <div className="text-zinc-400 font-medium text-lg p-3">
          <span className="text-white">Contact Poster.</span> Create your own
          poster that contacts will see when you call. Pick a favourite pic or
          Memoji, pair it with a favourite font and there you have it — your
          very own calling card.
        </div>
        <div className="text-zinc-400 font-medium text-lg p-3">
          <span className="text-white">NameDrop.</span> Want to swap contact
          info with someone? Just bring your iPhone close to theirs. You can
          both choose what you want to share, and the information transfers
          instantly.
        </div>
        <div className="text-zinc-400 font-medium text-lg p-3">
          <span className="text-white">Live Stickers.</span> Touch and hold an
          object in a photo to lift it from the background and create a sticker.
          Add effects like Puffy and Shiny. Or create animated stickers from
          Live Photos.
        </div>
      </div>
    </main>
  );
};

export default IOS;
