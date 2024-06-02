import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%
margin: 0 auto;

  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.42);
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  padding-right: 40px;
  padding-left: 40px;
  background-color: rgb(206, 158, 240);
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.42);
  > nav {
    display: flex;
  }
`;
export const Logo = styled(NavLink)`
  font-weight: 400;
  margin: 0;
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  padding: 6px 32px;
  border-radius: 4px;
  text-decoration: none;
  color: #004991;
  font-size: 35px;
  font-weight: 700;

  &.active {
    text-decoration: 3px underline rgb(146, 41, 144, 0.6);
  }
  &:hover {
    color: #006991;
    font-size: 25p;
  }
  &:focus {
    color: #006991;
    font-size: 25p;
  }
`;
