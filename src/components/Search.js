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
  width: 70%;
  margin: 50px;
`;

export default function Search() {
  const [isSearched, setSearched] = useState("");
  const [meal, setMeal] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    );
    console.log(res.data.meals)
  };

  const fetchMeals = async (e) => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=$`{isSearched}`"
    )
      .then((result) => result.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setMeal(result.data.meals);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error", error);
        }
      );
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  if (error) {
    return <div>Error</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <img src={loading} alt="Loading..." />
      </div>
    );
  } else {
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
        {meal.map(({image, title }, index) => {
          return (
            <Cards key={index} strMealThumb={image} strMeal={title} />
          );
        })}
      </PageContainer>
    );
  }
}
