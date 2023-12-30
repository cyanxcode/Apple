import Closer from "./components/Closer";
import Explore from "./components/Explore";
import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import Titanium from "./components/Titanium";

function App() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Titanium />
      <Highlight />
      <Closer />
      <Explore />
      <main className="w-full min-h-screen bg-black flex flex-col items-center "></main>
    </main>
  );
}
export default App;
