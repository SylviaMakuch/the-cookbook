import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import taco from "./../media/taco.jpeg";
import styled from "styled-components";
import Cards from "./Card.js";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import swal from "sweetalert";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
  overflow-x: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 950px;
  border: 45px solid #b6dbc8;
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
  min-height: 800px;
  margin: 40px;
`;

const SearchBoxContainer = styled.div`
  @media (max-width: 500px) {
    margin-left: 40px;
  }
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
  @media (max-width: 400px) {
    width: 100px;
    height: 10px;
  }
`;

const Form = styled.form`
  position: absolute;
  top: 550px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1700px) {
    top: 400px;
  }
  @media (max-width: 500px) {
    left: 30px;
    top: 300px;
  }
`;

const SubTitle = styled.h2`
  font-family: 'Inconsolata', monospace;
  color: white;
  text-transform: uppercase
  font-size: 60px;
  letter-spacing: 0.8px;
  @media (max-width: 500px) {
    max-width: 400px;
    line-height: 1.5;
    font-size: 30px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  color: navy;
  font-size: 40px;
  letter-spacing: 0.8px;
  @media (max-width: 500px) {
    font-size: 25px;
    text-align: center;
  }
`;

const H1 = styled.h1`
    font-size: 88px;
    font-family: "Inspiration", monospace;
    text-align: center;
    margin: 0px;
    color: #ff3b3b;
    font-weight: 100;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 35px;
  }
`;

export default function Search() {
  const [isSearched, setSearched] = useState("");
  const [meals, setMeals] = useState([]);
  const [isDataNull, setDataNull] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    ).then((res) => {
      if (res.data.meals === null) {
        setDataNull(true);
        // alert("No results found, please try again");
        swal("No results found, please try again");
      } else {
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
        <SearchBoxContainer>
          <Input type="text" onInput={(e) => setSearched(e.target.value)}></Input>
          <Button type="submit">
            <SearchIcon style={{ color: "white" }} />
          </Button>
        </SearchBoxContainer>
      </Form>
      <Title>{isDataNull ? "Ingredient examples:, chicken, beef, corn, egg, cheese, chickpeas...Sorry- no Shrimp available!" : ""}</Title>
      <CardContainter>
        {meals.length > 0 ? meals.map(({ idMeal, strMeal, strMealThumb }, index) => {
          return (
            <Link
              to={`/meal/${idMeal}`}
              key={index}
            >
              <Cards key={index} title={strMeal} url={strMealThumb} />
            </Link>
          );
        }) : <H1>"Meals will appear here"</H1>}
      </CardContainter>
      <Footer />
    </PageContainer>
  );
}
