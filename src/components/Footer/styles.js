/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  
  background: #141414;
  padding: 0px;
  color: var(--primary);
  text-align: center;
  /* border-top: 2px solid var(--primary); */
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
