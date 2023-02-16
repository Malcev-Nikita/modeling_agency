import Header from "./components/Header";
import Nav from "./components/Nav";
import Models from "./components/Models";
// import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Map from "./components/Map";
import Footer from "./components/Footer";
import UpperButton from "./components/UpperButton";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Models />
      {/* <Services/> */}
      <AboutUs/>
      <Map/>
      <Footer/>
      <UpperButton/>
    </div>
  );
}

export default App;
