import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";



function App() {
  return (
    <div className="text-black min-w-screen w-fit min-h-screen h-fit bg-[#8b6508]">
    <Navbar />
    <Home />
    <Footer />
    <Button />

  </div>);
}

export default App;
