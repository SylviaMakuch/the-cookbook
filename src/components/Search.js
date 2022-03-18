import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import forkspoon from "./../media/forkspoon.svg";
import styled from "styled-components";

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
  const [isSearched, isSetSearched] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(isSearched);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${isSearched}`
    );
    console.log(res.data.meals[0]);
  };

  return (
    <PageContainer>
      <ForkSpoonImg src={forkspoon} />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          style={{ padding: "18px", borderRadius: "25px" }}
          onInput={(e) => isSetSearched(e.target.value)}
        ></input>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </PageContainer>
  );
}
