import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    height: 26,
  },
  avatar: {
    marginRight: 4,
    height: '100%',
  },
  name: {
    marginRight: 12,
    whiteSpace: 'pre',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const handleLogout = () => {
    dispatch(authOperations.logout());
  };
  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="user avatar" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </div>
  );
}
