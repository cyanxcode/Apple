import Closer from "./components/Slide3";
import Explore from "./components/Slide4";
import Highlight from "./components/Slide2";
import Navbar from "./components/Navbar";
import Titanium from "./components/Slide1";
import Phone from "./components/Slide5";
import IOS from "./components/Slide6";
import Shop from "./components/Slide7";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Titanium />
      <Highlight />
      <Closer />
      <Explore />
      <Phone />
      <IOS />
      <Shop />
      <Footer />
    </main>
  );
}
export default App;
