"use client";

import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "solid"; // Add all possible values for `variant`
};

export const Button = styled.button<ButtonProps>`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s all ease-out;
  border-radius: 4px;
  &:hover {
    transform: translateY(-5px); /* Move up slightly */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15); /* Add a shadow for a pop-out effect */
  }
`;

export const GradientButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SubmitButton = styled(Button).attrs((props) => ({
  type: "submit",
}))``; //addin `` is important here
