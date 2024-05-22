import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <div className="bg-[#0c0c1d] min-h-[100vh]">
      <Cursor/>
      <section className="w-[100vw] h-[100vh]">
        <NavBar/>
        <HeroSection/>
      </section>
    </div>
  );
}

export default App;
