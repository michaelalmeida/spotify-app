import React from "react";

import styled, { css } from "styled-components";
import { white, primaryColor } from "../colors";

const BtnPattern = css`
  padding: 10px;
  color: ${primaryColor};
  flex-grow: 0;
  border: 2px solid ${primaryColor};
  font-weight: 700;
  text-transform: uppercase;
  background: ${white};

  &:hover {
    color: ${white};
    background: ${primaryColor};
  }
`;

const Btn = styled.button`
  ${BtnPattern}
  outline: none;
  cursor: pointer;
`;

const BtnLink = styled.a`
  ${BtnPattern}
  display: inline-block;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;

interface ButtonProps {
  isLink?: boolean;
  children?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ isLink, children, href }) => {
  return isLink ? (
    <BtnLink href={href}>{children}</BtnLink>
  ) : (
    <Btn>{children}</Btn>
  );
};

export default Button;
