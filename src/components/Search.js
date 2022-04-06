import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import taco from "./../media/taco.jpeg";
import styled from "styled-components";
import Cards from "./Card.js";
import { Link } from "react-router-dom";
import Header from "./Header.js";


const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
  overflow-x: hidden;
  background-color: #b6dbc8;
`;

const Image = styled.img`
  width: 100%;
  height: 900px;
  padding-top: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  @media (max-width: 1700px) {
    height: 600px;
  }
  @media (max-width: 500px) {
    height: 500px;
    width: 140%;
  }
`;

const CardContainter = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
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
  @media (max-width: 500px) {
    width: auto;
  }
`;

const Form = styled.form`
  position: absolute;
  top: 550px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1700px) {
    top: 350px;
  }
  @media (max-width: 500px) {
    top: 400px;
  }
`;

const SubTitle = styled.h2`
  font-family: 'Inconsolata', monospace;
  color: white;
  text-transform: uppercase
  font-size: 40px;
  letter-spacing: 0.8px;
`;

const Title = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  color: blue;
  font-size: 40px;
  letter-spacing: 0.8px;
  @media (max-width: 500px) {
    font-size: 25px;
    text-align: center;
  }
`;

export default function Search() {
  const [isSearched, setSearched] = useState("");
  const [meals, setMeals] = useState([]);
  const [isDataNull, setDataNull] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    ).then((res) => {
      if (res.data.meals === null) {
        setDataNull(true);
        alert("No results found");
      }else{
        setMeals(res.data.meals);
        setDataNull(false);
      }
    });

    if (meals === null) {
      console.log("No meals found");
    } 
  };

  return (
    <PageContainer>
      <Header />
      <Image src={taco} />
      <Form onSubmit={submitHandler}>
        <SubTitle style={{ textAlign: "center" }}>
          Please Search an Ingredient
        </SubTitle>
        <Input type="text" onInput={(e) => setSearched(e.target.value)}></Input>
        <Button type="submit">
          <SearchIcon style={{ color: "white" }} />
        </Button>
      </Form>
      <Title>{isDataNull ? "No Meals Found, please type in an another ingredient" : "" }</Title>
      <CardContainter>
        {meals.map(({ idMeal, strMeal, strMealThumb }, index) => {
          return (
            <Link
              to={`/meal/${idMeal}`}
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
