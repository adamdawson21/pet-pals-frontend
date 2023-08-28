import { useState } from "react";
import './SignUp.css'
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await SignUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign Up</button>
    }
  }

  const { firstName, lastName, username, email, password, passwordConfirmation } = form
  return (
    <div className="sign-in-body-2">
      <div className="form-container">
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <label for="firstName">First Name</label>
          <input
            required
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter First Name"
            onChange={handleChange}
          />
          <label for="lastName">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={handleChange}
          />
          <label for="username">Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label for="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <label for="password">Password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <label for="passwordConfirmation">Password Confirmation</label>
          <input
            required
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </div>
  )
}

export default SignUp