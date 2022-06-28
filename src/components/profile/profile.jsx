import PropTypes from 'prop-types';

import {
  ProfileContainer,
  DescriptionContainer,
  AvatarImage,
  Name,
  TagName,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './ProfileStyles';

export default function Profile ({username, tag, location, avatar, stats }) {
    return (
      <ProfileContainer>
      <DescriptionContainer>
        <AvatarImage src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </DescriptionContainer>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,

}