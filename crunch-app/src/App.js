import "./App.css";
import Footer from "./components/footer";
import RestaurantCardLayout from "./components/cardLayout";
import CarouselComponent from "./components/carousel";

// TODO - 1.Implement Routing
//        2. Carousel

function App() {
  return (
    <div className="App">
      {/* <CarouselComponent /> */}
      <RestaurantCardLayout />
      <Footer />
    </div>
  );
}

export default App;
