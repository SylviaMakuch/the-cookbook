import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import forkspoon from "./../media/forkspoon.svg";


const H1 = styled.h1`
    font-size: 88px;
    font-family: "Inspiration", cursive;
    text-align: center;
    margin: 0px;
    color: black;
    margin-bottom: 40px;
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
`;


export default function Header() {
    return (
        <PageContainer >
            <ForkSpoonImg src={forkspoon} />
            <H1>The CookBook</H1>
            <ForkSpoonImg src={forkspoon} />
            {/* <Link to="/search"><Title>Search</Title></Link> */}
        </PageContainer>
    );
}