import styled from "styled-components";

const Cards = styled.div`
  /* background-image: linear-gradient(to bottom, #ff000000 , #000000e0); */
  height: 480px;
  width: 350px;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* &:hover {
    transform: translateY(-10px);
     background-image: linear-gradient(to bottom, #ff000000 , #000000e0);
  } */
`;

const Image = styled.img`
  height: 480px;
  width: 350px;
  z-index: -1;
  position: absolute;
  border-radius: 25px;
`;

const Title = styled.h2`
  font-family: "Abril Fatface";
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 25px;
  letter-spacing: 0.8px;
`;


export default function Card({ title, url }, index) {
    return(
        <Cards key={index}>
            <Image src={url}>
            </Image>
            <Title>{title}</Title>
        </Cards>
    )
}