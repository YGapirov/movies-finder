import styled from 'styled-components';

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
    background-color: orangered;
  }
`;

export const ArrowIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: auto;
`;
