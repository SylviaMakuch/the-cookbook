import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
  width: 100%;
  background-color: #d0f0ee;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 50px;
  padding: 50px;
  border-radius: 50px;
  background: linear-gradient(225deg, #bbd8d6, #dfffff);
  box-shadow: -20px 20px 60px #b1ccca, 20px -20px 60px #efffff;
`;

const Title = styled.h1`
  font-family: "Roboto Slab", serif;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
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
  border-radius: 0px 0px 50px 50px;
  background-image: linear-gradient(to top, #ff000000, #ff000000, #f9e8e894);
`;

const IngredientBox = styled.div``;

const QuanityBox = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column; */
`;

const Instructions = styled.div`
  font-family: "Abril Fatface";
  font-size: 20px;
  width: 700px;
  white-space: pre-line;
  word-spacing: 4px;
`;

function createIngredientList(recipe) {
  const items = [];

  for (let i = 1; i <= 20; i += 1) {
    const strIngredient = recipe[`strIngredient${i}`];
    const strMeasure = recipe[`strMeasure${i}`];

    if (strIngredient || strMeasure) {
      items.push({
        ingredient: strIngredient,
        measure: strMeasure,
      });
    }
  }
  return items;
}

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.meals[0]);
        setRecipe(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const items = createIngredientList(recipe);

  return (
    <>
      <PageContainer>
        <InnerContainer>
          <Title>{recipe.strMeal}</Title>
          <h3>
            Catergories: {recipe.strCategory}, {recipe.strArea}
          </h3>
          <Picture src={recipe.strMealThumb} />
        </InnerContainer>
        <InnerContainer>
          <IngredientBox>
            <SubTitle> Ingredients </SubTitle>{" "}
            <ul>
              {items.map((item) => (
                <QuanityBox key={item.ingredient}>
                  {item.measure} of {item.ingredient}
                </QuanityBox>
              ))}
            </ul>
          </IngredientBox>
        </InnerContainer>
        <Instructions>{recipe.strInstructions}</Instructions>
      </PageContainer>
    </>
  );
}
