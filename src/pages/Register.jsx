const Register = () => {
  return (
    <form className="register-form">
      <span className="register-form__title">Register</span>
      <input className="register-form__input" type="text" name="name" placeholder="name" />
      <input className="register-form__input" type="email" name="email" placeholder="email" />
      <input
        className="register-form__input"
        type="password"
        name="password"
        placeholder="password"
      />
      <button className="register-form__btn">Sign up</button>
      <div>
        <span className="register-form__link__message">You do have an account?</span>
        <a className="register-form__link" href="">
          Login
        </a>
      </div>
    </form>
  );
};

export default Register;
