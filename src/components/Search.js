import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import forkspoon from "./../media/forkspoon.svg";
import styled from "styled-components";
import Cards from "./Card.js";
import loading from "./../media/loading.svg";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ForkSpoonImg = styled.img`
  width: 350px;
  margin: 50px;
`;

const CardContainter = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  max-width: 1600px;
  justify-content: center;
`;

export default function Search() {
  const [isSearched, setSearched] = useState("");
  const [meals, setMeals] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    );
    setMeals(res.data.meals);
    console.log(res.data.meals)
  };

  useEffect(() => {}, [meals]);

  return (
    <PageContainer>
      <ForkSpoonImg src={forkspoon} />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          style={{ padding: "18px", borderRadius: "25px", margin: "10px" }}
          onInput={(e) => setSearched(e.target.value)}
        ></input>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <CardContainter>


        {meals.map(({ idMeal, strMeal, strMealThumb }, index) => {
          return <Cards key={index} title={strMeal} url={strMealThumb} />;
        })}
      </CardContainter>
    </PageContainer>
  );
}
