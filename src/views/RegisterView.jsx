import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [{ name, email, password }, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setCredentials({ name: '', email: '', password: '' });
  };

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="name"
            className="form-control"
            id="floatingName"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
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

        <button className="btn btn-secondary" type="submit">
          Register
        </button>
      </form>
    </>
  );
}
