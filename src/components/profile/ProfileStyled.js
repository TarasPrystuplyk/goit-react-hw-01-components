import styled from 'styled-components';

export const ProfileContainer = styled.div`
  align-items: center;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
`;

export const AvatarImage = styled.img`
  width: 260px;
  height: 260px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.accent};
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const TagName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.accentText};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const Location = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.accentText};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const StatsList = styled.ul`
  padding: 0;
  margin: 0;
  align-items: center;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 17px;
  justify-content: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  :not(:last-child) {
    border-right: 1px solid rgb(253, 252, 252);
  }
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentText};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;