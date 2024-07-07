import styled from 'styled-components';
export const Container = styled.div`

  font-size: 25px;
  color: #F2EB9A;
  font-weight: 600;
  text-align: center;
  padding-bottom: 10px;
  margin-top: 15px;
  }
`;
export const Title = styled.h2`
  font-size: 44px;
  margin: 0 auto;
  text-align: center;
  padding: 25px;
  color: lightgrey;
  text-shadow: 0 0 5px rgb(67, 182, 208);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 1280px;
`;
export const Item = styled.li`
  width: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Image = styled.img`
  max-height: 480px;
  border-radius: 15px;
`;
