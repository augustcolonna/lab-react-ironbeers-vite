import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import ListBeers from "./components/ListBeers"
import SingleBeer from "./components/SingleBeer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id"  element={<SingleBeer />} />
        
      </Routes>
    </div>
  );
}

export default App;