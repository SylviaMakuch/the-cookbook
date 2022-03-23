import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

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

const RecipeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export default function Recipe() {
  return (
    <PageContainer>
      <Title></Title>
      <Picture />
      <a href=""></a>
      <IngredientBox></IngredientBox>
      <RecipeBox></RecipeBox>
    </PageContainer>
  );
}
