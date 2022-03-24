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
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;

const Title = styled.h2`
  font-family: "Abril Fatface";
  color: black;
  text-align: center;
  text-transform: uppercase
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.8px;
`;

const Picture = styled.img`
  width: 80%;
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

const Instructions = styled.div``;

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52878";
  axios
    .get(url)
    .then((res) => {
      console.log(res.data.meals[0]);
    })

    .catch((err) => {
      console.log(err);
    });

  return (
    <PageContainer>
      <Title>{strMeal}</Title>
      {/* <Picture src={strMealThumb}/>
      <IngredientBox></IngredientBox>
      <QuanityBox>{strInstructions}</QuanityBox>
      <Instructions></Instructions> */}
    </PageContainer>
  );
}
