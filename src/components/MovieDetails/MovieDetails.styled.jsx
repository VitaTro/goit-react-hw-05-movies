import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-left: 70px;
  padding-bottom: 40px;
  padding-right: 70px;
  color: rgb(20, 20, 20);

  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Button = styled.button`
  margin-top: 20px;
  background-color: #fffab2;
  border: 2px solid orange;
  border-radius: 7px;
  font-size: 20px;
  color: #9183fe;
`;
export const Title = styled.h2`
  color: #fffab2;
`;

export const Image = styled.img`
  border-radius: 6px;
  max-height: 450px;
  box-shadow: 0px 0px 5px 1px rgba(200, 200, 200, 1);
`;

export const Infos = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const Description = styled.div`
  margin-left: 20px;
  border-radius: 6px;
  padding: 18px;
  background-color: #e0e0e070;
  box-shadow: 0px 0px 5px 1px rgba(200, 200, 200, 1);
  color: white;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  list-style: none;
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 60px;
  gap: 40px;
  margin-top: 30px;
  text-decoration: none;
`;

export const ButtonCast = styled.button`
  background-color: #e0e0e070;
  border: 3px solid gray;
  border-radius: 7px;
  font-size: 25px;
  color: #9183fe;
  text-decoration: none;
`;
export const ButtonReview = styled.button`
  background-color: #e0e0e070;
  border: 3px solid gray;
  border-radius: 7px;
  font-size: 25px;
  color: #9183fe;
  text-decoration: none;
`;
export const Overview = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
`;
