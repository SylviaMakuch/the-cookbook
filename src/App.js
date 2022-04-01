import React from "react";
import styled from "styled-components";
import Categories from "./components/Categories.js";
import Search from "./components/Search.js";
import Recipe from "./components/Recipe.js"
import { Route, Routes, BrowserRouter } from "react-router-dom";

const H1 = styled.h1`
  font-size: 88px;
  font-family: "Inspiration", cursive;
  text-align: center;
`;

function App() {
  return (
    <>
      <H1>The CookBook</H1>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="catergories" element={<Categories />} />
          <Route path="/meal/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
