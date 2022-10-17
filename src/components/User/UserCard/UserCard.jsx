import UserAvatar from './../UserAvatar/UserAvatar';
import UserName from './../UserName/UserName';

import './UserCard.scss';

const UserCard = ({ userName, userAvatarUrl }) => {
  return (
    <div className="user-card">
      <div className="user-card__container user-card__name">
        <UserName userName={userName} />
      </div>
      <div className="user-card__containe user-card__avatar">
        <UserAvatar userAvatarUrl={userAvatarUrl} />
      </div>
    </div>
  );
};

export default UserCard;
