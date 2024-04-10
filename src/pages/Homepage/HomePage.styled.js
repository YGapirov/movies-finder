import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
`;

export const TrendingTitle = styled.h1`
  font-size: 35px;
  margin: 25px;
  text-align: center;
  animation: ${changeColor} 5s linear infinite;
`;

export const ErrorMessage = styled.p`
  color: gold;
  font-size: 32px;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  color: #888;
  font-size: 32px;
  text-align: center;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;

  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
