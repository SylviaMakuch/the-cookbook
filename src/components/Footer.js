import React from "react";
import styled from "styled-components";
import SocialTab from "./SocialTab.js";

const BackGround = styled.div` 
    background-color: #b6dbc8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media (max-width: 1600px){
        top: 2500px;
    }
`;

const Text = styled.div`
    color: #1f2e1a;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 300;
    margin: 20px;
    text-align: center;
`;

export default function Footer() {
    return (
        <BackGround >
            <Text> Thank you for coming to visit my Recipe Page!</Text>
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
            <a href="https://sylviamakuch.github.io/portfolio/">About Me</a>
            <Text style={{fontSize: "10px"}}> Made with MealDb API and React.js</Text>
        </BackGround>
    )
};