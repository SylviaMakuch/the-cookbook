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
  width: 350px;
  margin: 50px;
`;

const Tag = styled.a`
  text-decoration: none;
  text-transform: uppercase;
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

const Button = styled.button`
  background-color: #ffffff00;
  border: none;
  cursor: pointer;
  position: relative;
  top: 4px;
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
    console.log(res.data.meals);
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
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
      <CardContainter>
        {meals.map(({ idMeal, strMeal, strMealThumb }, index) => {
          return (
            <Tag
              href={`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`}
              key={index}
            >
              <Cards key={index} title={strMeal} url={strMealThumb} />
            </Tag>
          );
        })}
      </CardContainter>
    </PageContainer>
  );
}
