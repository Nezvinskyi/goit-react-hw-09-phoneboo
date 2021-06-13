import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginView = ({ onLogin }) => {
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setCredentials({ email: '', password: '' });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3  form-floating">
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            id="floatingEmail"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">E-mail</label>
        </div>
        <div className=" mb-3 form-floating">
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
