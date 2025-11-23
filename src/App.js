import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import NavBar from "./pages/NavBar";
import { WatchListProvider } from "./context/WatchListContext";

function App() {
  return (
    <WatchListProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;
