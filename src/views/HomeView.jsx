import { useHistory } from 'react-router';
import './HomeView.scss';

const HomeView = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contacts');
  };
  return (
    <div className="container home-view">
      <h1>Welcome</h1>
      <button className="btn btn-secondary" onClick={handleClick}>
        Go to Phonebook
      </button>
    </div>
  );
};

export default HomeView;
