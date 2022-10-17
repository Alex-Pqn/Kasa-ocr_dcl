import './UserAvatar.scss';

const UserAvatar = ({ userAvatarUrl }) => {
  return (
    <div className="user-avatar">
      <img src={userAvatarUrl} alt="" />
    </div>
  );
};

export default UserAvatar;
