import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";

import HomePage from "./pages/homepage/homepage.component";
import PicturePage from "./pages/picturepage/picturepage.component";
import Footer from "./components/Footer/Footer.component";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/frontend-mentor-galleria/' element={<HomePage />} />
        <Route
          path='/frontend-mentor-galleria/:pictureName'
          element={<PicturePage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
