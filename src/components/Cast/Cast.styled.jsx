import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  color: #e0e0e070;
  display: flex;

  @media (max-width: 500px) {
    margin: 0;
    margin-top: 10px;
  }
`;

export const Caption = styled.caption`
  font-size: 40px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 40px;
  padding-top: 20px;
  color: lightgrey;
  text-shadow: 0 0 5px rgb(67, 182, 208);
`;

export const Tbody = styled.tbody`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 550px) {
    margin: 0;
  }
`;

export const Table = styled.table`
  box-shadow: 0px 0px 7px 1px rgba(205, 205, 205, 1);
  border-radius: 6px;
  width: 280px;
  padding: 5px;
  background-color: #e0e0e070;

  @media (max-width: 550px) {
    width: 200px;
  }
`;

export const Image = styled.img`
  border-radius: 6px;
  max-width: 120px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: black;
  padding-left: 5px;
`;

export const Name = styled.td`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  padding-bottom: 10px;
`;
