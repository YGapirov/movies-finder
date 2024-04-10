import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const DetailsContainer = styled.div`
  display: flex;

  gap: 20px;
  margin: 0 auto;
  padding: 20px;

  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 8px;
`;

export const MovieInfo = styled.div`
  padding-left: 20px;
  align-self: center;
`;

export const Overview = styled.p`
  font-style: italic;
`;

export const AdditionalInfo = styled.div`
  padding-left: 20px;
  padding-top: 5px;

  border-radius: 8px;
`;

export const AddList = styled.li`
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: grey;

  &:hover {
    color: orangered;
  }

  &.active {
    color: orangered;
    font-weight: bold;
  }
`;

export const StyledBackLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  margin: 15px;
  display: block;
  color: grey;

  &:hover {
    color: orangered;
  }
`;
