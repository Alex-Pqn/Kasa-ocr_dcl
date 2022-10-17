import './UserName.scss';

const UserName = ({ userName }) => {
  return (
    <div className="user-name">
      <span>{userName}</span>
    </div>
  );
};

export default UserName;
