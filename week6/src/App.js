import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import Movies from "./pages/Movies";
import Tv from "./pages/TV";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail"


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />

          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
