import styled from 'styled-components';

export const Card = styled.div`
  background: #eee;
  border-radius: 0.3rem;
  gap: 1rem;
  margin: 1rem 0;
  min-width: 20rem;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    overflow: hidden;
    padding: 0.5rem 0;
    text-align: center;
    width: 100%;
  }
`;
export const Line = styled.p`
  font-size: 1.2rem;
`;
