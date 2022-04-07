import React from "react";
import styled from "styled-components";
import SocialTab from "./SocialTab.js";

const BackGround = styled.div`
    width: 100%;
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
`;

export default function Footer() {
    return (
        <BackGround >
            <Text style={{color: "#1f2e1a"}}> Thank you for coming to visit my Recipe Page!</Text>
            <SocialTab/>
            <Text> By: Sylvia Makuch</Text>
            <a href="https://622fa5acf920c80cc6d0cade--reverent-wiles-1b601d.netlify.app/">About Me</a>
        </BackGround>
    )
};