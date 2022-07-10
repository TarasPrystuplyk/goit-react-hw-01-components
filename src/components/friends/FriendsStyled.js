import styled from 'styled-components';

export const FriendsContainer = styled.div`
  align-items: center;
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
`;
export const FriendsList = styled.ul`
  width: 400px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Friend = styled.li`
  box-shadow: 2px 3px 10px 1px ${p => p.theme.colors.primary};
  width: 300px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  :not(:last-child) {
    border-bottom: 1px solid rgb(253, 252, 252);
  }
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Status = styled.span`
  color: #e4e6ee;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: ${p => p.theme.space[4]}px;
`;

export const FriendAvatar = styled.img`
  width: 48px;
`;

export const FriendName = styled.p`
  margin-left: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;