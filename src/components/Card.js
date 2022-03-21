import styled from "styled-components";

const Cards = styled.div`
  background-image: linear-gradient(to top, #ff000000, #ff000000, #f9e8e894);
  height: 480px;
  width: 350px;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-10px);
    background-image: linear-gradient(to bottom, #ff000000, #000000e0);
  }
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
  color: black;
  text-align: center;
  text-transform: uppercase
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.8px;
  &:hover {
    color: red;
  }
`;

export default function Card({ title, url }, index) {
  return (
    <Cards key={index}>
      <Image src={url}></Image>
      <Title>{title}</Title>
    </Cards>
  );
}
