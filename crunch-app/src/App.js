import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RestaurantCardLayout from "./components/cardLayout";
import CarouselComponent from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CarouselComponent/> */}
      <h1>RESTAURANTS</h1>
      <RestaurantCardLayout />
      <Footer />
    </div>
  );
}

export default App;
