import PropTypes from 'prop-types';

import { Status, FriendAvatar, FriendName } from './FriendsStyled';

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <>
      <Status
        isOnline={isOnline}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </Status>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};