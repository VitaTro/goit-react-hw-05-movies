import styled from 'styled-components';

export const Section = styled.section`
  background-color: bisque;
`;

export const Title = styled.h1`
  font-size: 44px;
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  color: brown;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 1080px;
`;
export const Item = styled.li`
  width: 340px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Image = styled.img`
  max-height: 480px;
  border-radius: 15px;
`;
export const Container = styled.div`

  font-size: 22px;
  color: brown;
  font-weight: 400;
  text-align: center;
  padding-bottom: 16px;
  margin-top: 10px;
  }
`;
