import React from "react";
import Search from "./components/Search.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Meal from "./components/Meal.js";
import ScrollToTop from "./components/ScrollToTop.js";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/the-cookbook//" element={<Search />} />
          <Route path="/meal/:mealId" element={<Meal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
