import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
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
}
