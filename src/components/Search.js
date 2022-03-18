import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import forkspoon from "./../media/forkspoon.svg";
import styled from "styled-components";
import Cards from "./Card.js";

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
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    );
    console.log(res.data.meals);
    const results = res.data.meals;
  };

  const fetchMeals = () => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=$`{isSearched}`"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setResult(result.data.meals);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
    fetchMeals()
}, [])

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
      {}
    </PageContainer>
  );
}
