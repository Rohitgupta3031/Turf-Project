import React, { useRef, useState } from 'react';
import UserService from '../Services/UserService';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();

    // Validate username
    if (!enteredUsername) {
      setUsernameError('Username is required.');
      return;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (!enteredPassword) {
      setPasswordError('Password is required.');
      return;
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(enteredPassword)) {
      setPasswordError('Password must have at least one letter, one number, one special character, and be at least 8 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    // Form is valid, proceed with login
    const userCredentials = {
      username: enteredUsername,
      password: enteredPassword
    };

    UserService.loginCheck(userCredentials)
      .then((res) => {
        const result = res.data;
        console.log(result);

        if (result.username === userCredentials.username && result.password === userCredentials.password) {
          alert("Successfully logged in");
          sessionStorage.setItem("userId",result.userId);
         // localStorage.setItem("userId", JSON.stringify(result.userId));
          history("/turf");
        } else {
          alert("Failed to login. Invalid username or password.");
        }
      })
      .catch((err) => {
        alert("Failed to log in: " + err.message);
      });
  };

  return (
    <>
    <Header></Header>
    {/* Header start */}
    <div className="container-fluid bg-breadcrumb">
    <div className="container text-center" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3">User Login</h3>
    </div>
  </div>
  {/* Header End */}


      <section className="login_part section_padding pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center pt-4 pb-5">
            <div className="col-lg-6 col-md-6 log">
              <img className="img-fluid w-100 rounded-top"
                src="img/userLogin.png"
                alt="Image"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <u><h2 className='h1 text-center'>Sign In</h2></u>
                  <form className='form-control py-3'>
                    <div className="col-md-12 py-3" >
                      <input
                        type="text"
                        className={`form-control p-2 ${usernameError ? 'is-invalid' : ''}`}
                        name="username"
                        placeholder="Username"
                        ref={usernameRef}
                      />
                      <div className="invalid-feedback">{usernameError}</div>
                    </div>
                    <div className="col-md-12 py-3 ">
                      <input
                        type="password"
                        className={`form-control p-2 ${passwordError ? 'is-invalid' : ''}`}
                        name="password"
                        placeholder="Password"
                        ref={passwordRef}
                      />
                      <div className="invalid-feedback">{passwordError}</div>
                    </div>
                    <div className="col-md-12 py-3 text-center">
                      <button type="submit" className="btn btn-primary w-50" onClick={handleSubmit}>
                        Log In
                      </button><br></br>
                      <a className="lost_pass" href="#">
                        Forgot password?
                      </a><br />
                      <Link className="registration" to="/register">
                        Registration
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ... (Footer component) */}
      <Footer></Footer>
    </>
  );
}
