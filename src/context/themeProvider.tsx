"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

export type ThemeProviderProps = React.ComponentProps<
  typeof StyledThemeProvider
>;

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const GlobalStyles = createGlobalStyle`
  button{
    font-family: ${(props) =>
      props.theme
        .fontFamily}; // Any other font like 'Roboto' also works without a callback function
  }
`;
  return (
    <StyledThemeProvider {...props}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
