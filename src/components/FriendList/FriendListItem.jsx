import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const userStatus = isOnline ? css.active : css.inactive;

  return (
    <li className={css.item}>
      <span className={userStatus}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
