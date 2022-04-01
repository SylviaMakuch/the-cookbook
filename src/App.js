import React from "react";
import styled from "styled-components";
import Categories from "./components/Categories.js";
import Search from "./components/Search.js";
import Recipe from "./components/Recipe.js"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import forkspoon from "./media/forkspoon.svg";

const H1 = styled.h1`
  font-size: 88px;
  font-family: "Inspiration", cursive;
  text-align: center;
  margin: 0px;
`;
const ForkSpoonImg = styled.img`
  width: 50px;
  margin: 10px;
`;

function App() {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    <ForkSpoonImg src={forkspoon} />
    <H1>The CookBook</H1>
      <ForkSpoonImg src={forkspoon} />
    </div>
 
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
