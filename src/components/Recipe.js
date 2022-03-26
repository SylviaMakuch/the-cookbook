import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  color: red;
  font-size: 40px;
  letter-spacing: 0.8px;
`;

const SubTitle = styled.h2`
  font-family: "Abril Fatface, italic";
  color: blue;
  text-transform: uppercase
  font-size: 20px;
  letter-spacing: 0.8px;
  font-style: italic;
`;

const Picture = styled.img`
  width: 500px;
`;

const IngredientBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const QuanityBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Instructions = styled.ul`
  font-family: "Abril Fatface";
  font-size: 20px;
  width: 700px;
  white-space: pre-line;
  word-spacing: 4px;
`;

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874";
    axios
      .get(url)
      .then((res) => {
        if (data.meals === null || ingredient === "") {
          setIsDataNull(true);
        } else {
          console.log(res.data.meals[0]);
          setRecipe(res.data.meals[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const ingredients = recipe.strIngredient;
  const measurement = recipe.strMeasure;

  return (
    <PageContainer>
      <Title>{recipe.strMeal}</Title>
      <Picture src={recipe.strMealThumb} />
      <SubTitle>
        Catergories: {recipe.strCategory}, {recipe.strArea}
      </SubTitle>
      <a href={recipe.strYoutube}></a>
      <IngredientBox>{recipe.strIngredient}</IngredientBox>
      {measurement.map((measurement, i) => (
        <QuanityBox key={i}>{measurement}</QuanityBox>
      ))}
      <Instructions>{recipe.strInstructions}</Instructions>
    </PageContainer>
  );
}
