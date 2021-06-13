import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const RegisterView = ({ onRegister }) => {
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
    onRegister({ name, email, password });
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
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
