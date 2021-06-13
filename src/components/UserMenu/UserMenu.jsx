import { connect } from 'react-redux';
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

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="user avatar" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout} className="btn btn-secondary">
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
