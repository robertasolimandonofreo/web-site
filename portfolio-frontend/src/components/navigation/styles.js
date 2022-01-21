import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
  padding: 0.5rem;
  padding-left: 4rem;

  @media (max-width: 500px)  {
    display:none;

    > div {
      flex-direction: column;
      display: flex;
      padding: 0;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: auto 0;
  margin-left: 1.6rem;
  color: white;

  &:hover {
    color: #04c2c9;
    transition: 0.3s ease-out;
  }

  &.active {
    color: #04c2c9;
  }

  @media only screen and (max-width: 500px) {
    margin: .7rem 0;
  }
`;

