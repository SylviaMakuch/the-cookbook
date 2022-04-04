import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import forkspoon from "./../media/forkspoon.svg";

const Title = styled.h1`
    font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 50px;
        font-weight:100;
        color: black;
        text-decoration: none;
`;

const H1 = styled.h1`
    font-size: 88px;
    font-family: "Inspiration", cursive;
    text-align: center;
    margin: 0px;
    color: black;
`;

const ForkSpoonImg = styled.img`
    width: 50px;
    margin: 10px;
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;    
    background-color: white;
    width: 100%;
    margin-bottom: 20px;
`;


export default function Header() {
    return (
        <PageContainer >
            <ForkSpoonImg src={forkspoon} />
            <H1>The CookBook</H1>
            <ForkSpoonImg src={forkspoon} />
            <Link to="/search"><Title>Search</Title></Link>
        </PageContainer>
    );
}