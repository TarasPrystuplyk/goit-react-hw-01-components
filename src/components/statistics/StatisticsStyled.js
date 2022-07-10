import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  align-items: center;
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.accent};
`;

export const Info = styled.div`
  border-radius: ${p => p.theme.radii.normal};
  align-items: center;
  background-color: ${p => p.theme.colors.white};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  font-size: 42px;
  padding-top: ${p => p.theme.space[5]}px;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 4);
  width: 100%;
  height: 80px;
  background-color: ${p => p.theme.colors.accentText};
  border-radius: ${p => p.theme.radii.normal};
  :not(:last-child) {
    border-right: 1px solid rgb(253, 252, 252);
  }
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m}
`;
export const Percentage = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml}
`;