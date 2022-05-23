import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background: #435d7d;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  color: #eee;
`;
export const Links = styled.div``;
export const Navigate = styled(Link)`
  background: pink;
  margin: 0.2rem;
  border: 0;
  border-radius: 1rem;
  color: grey;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  text-decoration: 0;
  :hover {
    color: white;
    background: brown;
    transition: 0.5s;
  }
`;
