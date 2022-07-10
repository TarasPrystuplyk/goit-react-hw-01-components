import PropTypes from 'prop-types';
import FriendListItem from './FriendsItem';
import { FriendsContainer, FriendsList, Friend } from './FriendsStyled';

export default function FriendList({ friends }) {
  return (
    <FriendsContainer>
      <FriendsList>
        {friends.map(friend => (
          <Friend key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          </Friend>
        ))}
      </FriendsList>
    </FriendsContainer>
  );
}


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
