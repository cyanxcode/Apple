import p1 from "../assets/phone-1.jpg";
import p2 from "../assets/phone-2.jpg";
import p3 from "../assets/phone-3.jpg";

const IOS = () => {
  return (
    <main className="w-9/12 bg-neutral-900 p-32 box-border">
      <div className="text-6xl font-semibold text-neutral-400 place-self-start">
        iOS 17.
      </div>
      <div className="text-6xl font-semibold text-white place-self-start">
        Style it out. Swap it over. <br /> Sticker it up.
      </div>
      <div className="flex gap-8 p-5 box-border mt-24">
        <div className="flex flex-col items-center gap-12 box-border">
          <img src={p1} alt="" />
          <div className="text-zinc-400 font-medium text-lg p-3">
            <span className="text-white">Contact Poster.</span> Create your own
            poster that contacts will see when you call. Pick a favourite pic or
            Memoji, pair it with a favourite font and there you have it — your
            very own calling card.
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 box-border">
          <img src={p2} alt="" />
          <div className="text-zinc-400 font-medium text-lg p-3">
            <span className="text-white">NameDrop.</span> Want to swap contact
            info with someone? Just bring your iPhone close to theirs. You can
            both choose what you want to share, and the information transfers
            instantly.
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 box-border">
          <img src={p3} alt="" />
          <div className="text-zinc-400 font-medium text-lg p-3">
            <span className="text-white">Live Stickers.</span> Touch and hold an
            object in a photo to lift it from the background and create a
            sticker. Add effects like Puffy and Shiny. Or create animated
            stickers from Live Photos.
          </div>
        </div>
      </div>
    </main>
  );
};

export default IOS;
