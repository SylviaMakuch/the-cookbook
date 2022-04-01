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
  font-family: "Inconsolata", monospace;
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
  font-family: "Cormorant", serif;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  color: red;
  font-size: 40px;
  letter-spacing: 0.8px;
`;

const SubTitle = styled.h2`
  font-family: 'Cormorant', serif;
  color: #f2a14e;
  text-transform: uppercase
  font-size: 20px;
  letter-spacing: 0.8px;
  font-style: italic;
  text-decoration-line: underline;
  text-decoration-color: antiquewhite;
`;

const Picture = styled.img`
  width: 500px;
  border-radius: 0px 0px 50px 50px;
  background-image: linear-gradient(to top, #ff000000, #ff000000, #f9e8e894);
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const IngredientBox = styled.div``;

const InstructionTitle = styled.h3`
font-family: 'Cormorant', serif;
  color: #697ff9;
  text-transform: uppercase
  font-size: 20px;
  letter-spacing: 0.8px;
  font-style: italic;
  text-decoration-line: overline;
  text-decoration-color: #2cddd9;
`;

const Instructions = styled.div`
  font-family: "Cormorant", serif;
  line-height: 1.5;
  font-size: 20px;
  width: 700px;
  white-space: pre-line;
  word-spacing: 4px;
  padding: 50px;
  margin: 30px;
  border-radius: 50px;
  background: #fcf0cf;
  box-shadow: -20px 20px 60px #b1ccca, 20px -20px 60px #efffff;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #1b676599;
  margin: 3px;
  display: inline-block;
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
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52814";
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
    <PageContainer>
      <Line />
      <Line />
      <InnerContainer>
        <Title>{recipe.strMeal}</Title>
        <Picture src={recipe.strMealThumb} />
        <h3>
          Catergories: {recipe.strCategory}, {recipe.strArea}
        </h3>
      </InnerContainer>
      <InnerContainer>
        <SubTitle> Ingredients: </SubTitle>{" "}
        <ul>
          {items.map((item) => (
            <IngredientBox key={item.ingredient}>
              {item.measure} of {item.ingredient}
            </IngredientBox>
          ))}
        </ul>
      </InnerContainer>
      <Instructions>
        <InstructionTitle>Instructions:</InstructionTitle>
        {recipe.strInstructions}
      </Instructions>
      <Line />
      <Line />
    </PageContainer>
  );
}
