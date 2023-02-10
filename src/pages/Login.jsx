const Login = () => {
  return (
    <form className="login-form">
      <span className="login-form__title">Login</span>
      <input className="login-form__input" type="email" name="email" placeholder="email" />
      <input className="login-form__input" type="password" name="password" placeholder="password" />
      <button className="login-form__btn">Sign in</button>
      <div>
        <span className="login-form__link__message">You do not have an account?</span>
        <a className="login-form__link" href="">
          Register
        </a>
      </div>
    </form>
  );
};

export default Login;
