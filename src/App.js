import Header from "./components/Header";
import Nav from "./components/Nav";
import Models from "./components/Models";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form";
import Map from "./components/Map";
import Footer from "./components/Footer";
import UpperButton from "./components/UpperButton";
import Burger from "./components/Burger";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Models/>
      <Advantages/>
      <AboutUs/>
      <Form/>
      <Map/>
      <Footer/>
      <UpperButton/>
      <Burger/>
    </div>
  );
}

export default App;
