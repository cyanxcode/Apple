import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import Titanium from "./components/Titanium";

function App() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Titanium />
      <Highlight />
    </main>
  );
}
export default App;
