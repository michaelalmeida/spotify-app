import styled from "styled-components";
import { black, white, primaryColor } from "../../style/colors";

interface CardProps {
  background?: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
}

export const Card = styled.div<CardProps>`
  margin: 5px;
  position: relative;
  width: 200px;
  height: 350px;
  display: flex;
  flex: 0 1 auto;
  align-content: flex-start;
  padding: 20px;
  flex-flow: column nowrap;
  justify-content: space-around;
  background: ${(props) => props.backgroundColor || primaryColor};
  margin-bottom: 20px;

  div {
    flex-grow: 1;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    height: 120px;

    div {
      margin-right: 0;
    }
  }
`;

export const CardImage = styled.div<CardProps>`
  width: 160px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: 160px 160px;
  background: url(${(props) =>
    props.backgroundImage || "https://dummyimage.com/200x200/000/fff&text=x"});

  @media (max-width: 960px) {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    height: 80px;
    background-size: 80px 80px;
  }
`;

export const CardName = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;
  color: ${white};

  @media (max-width: 960px) {
    padding-left: 60px;
  }
`;

export const CardAuthor = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  text-align: right;
  color: ${black};
`;

export const CardDescription = styled.p`
  margin-top: 5px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 12px;
  color: ${white};

  @media (max-width: 960px) {
    padding-left: 100px;
  }
`;

export const CardLink = styled.a`
  position: absolute;
  top: 150px;
  right: 20px;
  padding: 5px;
  margin-top: 5px;
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${white};
  background: ${black};

  @media (max-width: 960px) {
    top: 90px;
    right: 0;
  }
`;
