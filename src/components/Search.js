import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import heartfood from "./../media/heartfood.jpeg";
import styled from "styled-components";
import Cards from "./Card.js";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
  overflow-x: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 1100px;
  @media (max-width: 500px) {
    height: 600px;
  }
  @media (max-width: 1200px) {
    height: 1000px;
  }

  @media (max-width: 1700px) {
    width: auto;
  }
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
const Input = styled.input`
  padding: 18px;
  border-radius: 25px;
  margin: 10px;
  width: 300px;
`;

const Form = styled.form`
  position: absolute;
  top: 550px;
`;

const SubTitle = styled.h2`
  font-family: 'Cormorant', serif;
  color: white;
  text-transform: uppercase
  font-size: 20px;
  letter-spacing: 0.8px;
`;

export default function Search() {
  const [isSearched, setSearched] = useState("");
  const [meals, setMeals] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    );
    setMeals(res.data.meals);
  };
  useEffect(() => {}, [meals]);

  return (
    <PageContainer>
      <Image src={heartfood} />
      <Form onSubmit={submitHandler}>
        <SubTitle style={{ textAlign: "center" }}>
          Please Search an Ingredient
        </SubTitle>
        <Input type="text" onInput={(e) => setSearched(e.target.value)}></Input>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Form>
      <CardContainter>
        {meals.map(({ idMeal, strMeal, strMealThumb }, index) => {
          return (
            <Link
              to={`/meal/${idMeal}`}
              onClick={() => alert("boo")}
              key={index}
            >
              <Cards key={index} title={strMeal} url={strMealThumb} />
            </Link>
          );
        })}
      </CardContainter>
    </PageContainer>
  );
}
