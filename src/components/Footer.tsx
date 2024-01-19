const Footer = () => {
  return (
    <footer className="w-full">
      <div className="text-neutral-400 text-3xl lg:text-5xl font-semibold mt-20 lg:mt-44 ml-5 lg:ml-32">
        iPhone
      </div>
      <div className="lg:flex gap-12">
        <div className="flex flex-col ml-6 lg:ml-32 lg:mt-10 gap-2 mb-20">
          <div className="text-neutral-500 text-xs mt-10 lg:text-base">
            Explore iPhone
          </div>
          <div className="text-white text-xl font-semibold">
            Explore All iPhones
          </div>
          <div className="text-white text-xl font-semibold">iPhone 15 Pro</div>
          <div className="text-white text-xl font-semibold">iPhone 15</div>
          <div className="text-white text-xl font-semibold">iPhone 14</div>
          <div className="text-white text-xl font-semibold">iPhone 13</div>
          <div className="text-white text-xl font-semibold">iPhone SE</div>
          <div className="text-white text-sm mt-5">Compare iPhone</div>
          <div className="text-white text-sm mt-1">Switch from Android</div>
        </div>
        <div className="flex lg:mt-20">
          <div className="flex flex-col ml-6 gap-2 mb-32 ">
            <div className="text-neutral-500 text-xs">Shop iPhone</div>
            <div className="text-white text-base font-medium">Shop iPhone</div>
            <div className="text-white text-base font-medium">
              iPhone Accessories
            </div>
            <div className="text-white text-base font-medium">
              MagSafe Accessories
            </div>
            <div className="text-white text-base font-medium">Trade In</div>
            <div className="text-white text-base font-medium">Ways to Buy</div>
          </div>
          <div className="flex flex-col ml-6 gap-2 mb-32">
            <div className="text-neutral-500 text-xs">Go Further</div>
            <div className="text-white text-base font-medium">iOS 17</div>
            <div className="text-white text-base font-medium">
              iPhone Privacy
            </div>
            <div className="text-white text-base font-medium">iCloud</div>
            <div className="text-white text-base font-medium">Wallet</div>
            <div className="text-white text-base font-medium">Siri</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
