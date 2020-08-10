/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { Table, Wrapper } from './styles';

function Tabela({ children }) {
  return (
    <Wrapper>
      <Table>
        {children}
      </Table>
    </Wrapper>
  );
}

export default Tabela;
