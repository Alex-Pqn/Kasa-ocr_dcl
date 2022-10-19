import './UserCard.scss';

const UserCard = ({ name, avatarUrl }) => {
  return (
    <div className="user-card">
      <div className="user-card__container user-card__name">
        <span>{name}</span>
      </div>
      <div className="user-card__containe user-card__avatar">
        <img src={avatarUrl} alt="" />
      </div>
    </div>
  );
};

export default UserCard;
