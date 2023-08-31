import './SignIn.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../services/users';

const SignIn = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/")
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (

    <div className="sign-in-body">
      <div className="form-container">

        <h3>Sign In</h3>
        <form onSubmit={onSignIn}>
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
        <div className="sign-in-text">
          Don't have an Account? <Link to="/signup" className="underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;