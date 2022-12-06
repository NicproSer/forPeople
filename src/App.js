import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Preloader from "./components/Preloader/Preloader";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import "./App.css";
import { NavbarB } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Preloader />
      <NavbarB />
      <Banner />
      <ScrollButton />
    </div>
  );
}

export default App;
