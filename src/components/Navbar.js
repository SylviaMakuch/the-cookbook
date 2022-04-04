import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const Title = styled.h1`
  font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 50px;
    font-weight:100;
    color: #ffffff;
`

export default function Navbar() {
    return (
        <div>
            <Link to="/search"  ><Title>Search</Title></Link>
        </div>
    );
}