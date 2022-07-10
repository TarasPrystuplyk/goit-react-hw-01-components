import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
`;

export const Column = styled.td`
  text-transform: capitalize;
  text-align: center;
  height: 40px;
  width: 250px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal}; ;
`;

export const Row = styled.tr`
  height: 30px;
  width: 250px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const TableHead = styled.thead`
  font-size: ${p => p.theme.space[4]}px;
  height: 40px;
  width: 250px;
  background-color: ${p => p.theme.colors.accentText};
  color: ${p => p.theme.colors.white};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accentText};
  }
`;