import Header from "./components/Header";
import Nav from "./components/Nav";
import Models from "./components/Models";
import AboutUs from "./components/AboutUs";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      {/* <Models /> */}
      <AboutUs/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
