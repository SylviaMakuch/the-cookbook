import React from "react";
import styled from "styled-components";
import linkedin from "./../media/linkedin.svg";
import github from "./../media/github.svg"

const socialIcons = [
    {
        key: "linkedin",
        icon: linkedin,
        url: "https://www.linkedin.com/in/sylvia-makuch-6baa4a66/"
    },
    {
        key: "github",
        icon: github,
        url: "https://github.com/SylviaMakuch"
    }
];
const SocialsGrid = styled.div` 
    display: flex;
    justify-content: space-between;
`
const SocialsIcons = styled.img` 
    height: 4vh;
    z-index: 3;
    padding: 2vh;
    :hover{ 
        transform: rotateY(360deg);
        transition: .5s;
    }
`

 const SocialTab = () => {
    return (
        <SocialsGrid>
            {socialIcons.map((value, index) => {
                return(
                    <a href={value.url} target="blank" key={index}>
                    <SocialsIcons src={value.icon} />
                    </a>
                )
                })}
        </SocialsGrid>
    );
};

export default SocialTab;