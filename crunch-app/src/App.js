import "./App.css";
import ResponsiveAppBar from "./components/header";
import ResponsiveFooter from "./components/footer";
import CardLayout from "./components/cardLayout";
import CarouselComponent from './components/carousel'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <CarouselComponent/> */}
      <h1>RESTAURANTS</h1>
      <CardLayout />
      <ResponsiveFooter />
    </div>
  );
}

export default App;
