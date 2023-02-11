import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <span className="login-form__title">Login</span>
      <input className="login-form__input" type="email" name="email" placeholder="email" />
      <input className="login-form__input" type="password" name="password" placeholder="password" />
      <button className="login-form__btn">Sign in</button>
      <div>
        <span className="login-form__link__message">You do not have an account?</span>
        <Link className="login-form__link" to="/register">
          Register
        </Link>
      </div>
      {error && <span>Something went wrong</span>}
    </form>
  );
};

export default Login;
