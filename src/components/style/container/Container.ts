import styled from "styled-components";
import { white, primaryColor } from "../colors";

interface ContainerProps {
  width?: string;
  background?: boolean;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 60px auto;
  display: flex;
  width: ${(props) => props.width || "1024px"};
  background: ${(props) => (props.background ? white : "none")};
  border: 2px solid ${primaryColor};

  @media (max-width: 1024px) {
    margin: 5%;
    width: 90%;
  }
`;

export const InnerContainer = styled.div<ContainerProps>`
  margin: 30px auto;
  padding: ${(props) => (props.padding ? "30px" : "0px")};
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => (props.background ? white : "none")};
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    margin: 0;
    padding: 10px;
    flex-direction: column;
    width: 100%;
  }
`;

export const SimpleContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
`;
