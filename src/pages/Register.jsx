import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    try {
      const response = createUserWithEmailAndPassword(auth, email, password);
      response.then(async (userCredential) => {
        await updateProfile(userCredential.user, { displayName });
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          displayName,
          email,
        });
        await setDoc(doc(db, 'userChats', userCredential.user.uid), {});
        navigate('/');
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <span className="register-form__title">Register</span>
      <input className="register-form__input" type="text" name="name" placeholder="name" required />
      <input
        className="register-form__input"
        type="email"
        name="email"
        placeholder="email"
        required
      />
      <input
        className="register-form__input"
        type="password"
        name="password"
        placeholder="password"
        required
      />
      <button className="register-form__btn">Sign up</button>
      <div>
        <span className="register-form__link__message">You do have an account?</span>
        <Link className="register-form__link" to="/login">
          Login
        </Link>
      </div>
      {error && <span>Something went wrong</span>}
    </form>
  );
};

export default Register;
