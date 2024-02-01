import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/header";
import ResponsiveFooter from "./components/footer";
import ActionAreaCard from "./components/card";
import CardLayout from "./components/cardLayout";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <h1>RESTAURANTS</h1>
      <CardLayout />
      {/* <ActionAreaCard /> */}
      {/* <ResponsiveFooter /> */}
    </div>
  );
}

export default App;
