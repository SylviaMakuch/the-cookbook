import React from "react";
import Search from "./components/Search.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Meal from "./components/Meal.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          {/* <Route path="catergories" element={<Categories />} /> */}
          <Route path="/meal/:mealId" element={<Meal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
