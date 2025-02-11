import { styled } from "styled-components";

interface ContainerProps {
  showCart: boolean;
}
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ showCart }) => (showCart ? "0" : "-100%")};

  width: 400px;
  height: 100vh;
  background-color: #fff;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: all 0.3s ease-in-out;
`;

export const Title = styled.h1``;
