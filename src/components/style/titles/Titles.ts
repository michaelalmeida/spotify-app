import styled, { css } from "styled-components";
import { primaryColor } from "../colors";

interface TitlesPorps {
  center?: boolean;
}

const TitlePattern = css`
  color: ${primaryColor};
`;

export const H1 = styled.h1<TitlesPorps>`
  ${TitlePattern}
  font-family: 'Heebo', sans-serif;
  font-size: 36px;
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-weight: 700;
`;

export const H3 = styled.h3<TitlesPorps>`
  ${TitlePattern}
  font-family: 'Heebo', sans-serif;
  font-size: 26px;
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-weight: 300;
`;

export const H2 = styled.h2`
  ${TitlePattern}
  font-family: 'Heebo', sans-serif;
  font-size: 36px;
`;
