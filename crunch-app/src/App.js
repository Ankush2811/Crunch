import "./App.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import RestaurantCardLayout from "./components/cardLayout";
import CarouselComponent from "./components/carousel";

// TODO - 1.Implement Routing
//        2. Carousel
//        3. Move Header Component here

function App() {
  return (
    <div className="App">
      {/* <CarouselComponent /> */}
      {/* <Header /> */}
      <RestaurantCardLayout />
      <Footer />
    </div>
  );
}

export default App;
