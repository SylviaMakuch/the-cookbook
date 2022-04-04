import styled from "styled-components";

const Cards = styled.div`
  height: 480px;
  width: 350px;
  border-radius: 25px;
  margin: 40px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:  10px 10px 20px #564545,
             -10px -10px 20px #4b6854c7;
  &:hover {
    transform: translateY(-10px);
    background-image: linear-gradient(to bottom, #ff000000, #000000e0);
    color: white;
  }
`;

const Image = styled.img`
  height: 480px;
  width: 350px;
  z-index: 0;
  position: absolute;
  border-radius: 25px;
  opacity: 0.8px;
`;

const Image2 = styled.img`
  background-image: linear-gradient(to top, #ff000000, #ff000000, #ff000000, #f9e8e8eb);
  width: 350px;
  z-index: 1;
  position: relative;
  border-radius: 25px;
`;


const Title = styled.h2`
  font-family: 'Inconsolata', monospace;
  color: white;
  text-align: center;
  text-transform: uppercase
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.8px;
  z-index: 2;
  background-color: black;
  &:hover {
    color: red;
  }
`;

export default function Card({ title, url }, index) {
  return (
    <Cards key={index}>
      <Image src={url}></Image>
      <Image2></Image2>
      <Title>{title}</Title>
    </Cards>
  );
}
