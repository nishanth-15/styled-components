"use client";

import NextImage from "next/image";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg); 
  }
`;

export const SpinningImage = styled(NextImage)`
  animation: ${rotate} 20s linear infinite;
`;
