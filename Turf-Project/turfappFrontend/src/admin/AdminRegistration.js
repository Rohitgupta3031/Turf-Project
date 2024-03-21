import React, { useRef, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import AdminService from '../Services/AdminService';

export default function AdminRegistration() {

  const history = useNavigate();
  const [inpval, setinpval] = useState({
    Name: "",
    age: "",
    mobileNo: "",
    username: "",
    password: ""
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [data] = useState([]);

  const getdata = (e) => {

    const { value, name } = e.target;

    setinpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const Name = useRef();
  const age = useRef();
  const mobileNo = useRef();
  const username = useRef();
  const password = useRef();

  const handleValidation = () => {
    let errors = {};
    let isValid = true;

    if (!inpval.Name) {
      isValid = false;
      errors.Name = 'Full Name is required';
    }

    if (!inpval.age) {
      isValid = false;
      errors.age = 'Age is required';
    }

    if (!inpval.mobileNo || inpval.mobileNo.length !== 10 || !/^\d+$/.test(inpval.mobileNo)) {
      isValid = false;
      errors.mobileNo = 'Mobile Number should be exactly 10 digits and contain only numbers';
    }
    if (!inpval.username) {
      isValid = false;
      errors.username = 'Username is required';
    }

    if (!inpval.password || !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(inpval.password)) {
      isValid = false;
      errors.password1 = 'Password should be 8 characters and include at least one special character, one alphabet, and one number';
    }

    if (inpval.password1 !== inpval.password) {
      isValid = false;
      errors.password = 'Password and Confirm Password do not match';
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
    const Admin = {
      name: Name.current.value,
      age: age.current.value,
      mobileNo: mobileNo.current.value,
      username: username.current.value,
      password: password.current.value
    }
    AdminService.addAdmin(Admin).then((res) => {
     
      alert('sucessfully added');
      
      localStorage.setItem("registerData", JSON.stringify([...data, inpval]));
      history('/adminLogin');
    }).catch((err) => {
      console.log(err);
      alert('Faild to add user');

    });
  } else {
    alert('Please fill in all required fields correctly.');
  }
  };
  return (
    <>
    <Header></Header>
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center" style={{ maxWidth: 900,  }}>
        <h3 className="text-white display-3">Admin Register</h3>
      </div>
    </div>
    <form className="form-control">
      <div className="container" >
        <div className="row" >
          <div className="col-3 pt-5" ></div>
          <div className="col-md-6 pt-5" style={{border:"2px solid", backgroundColor:"#F2F2F2", WebkitBoxShadow: "2px 2px 10px black", borderRadius:"20px", marginTop:"3rem" ,marginBottom:"3rem" }}>
            <h1 className="h1 text-center">
              <u>Signup</u>
            </h1>
            <form className="row g-3 pt-3 pb-5">
              {/* ... (other form fields) */}
              <div className="col-12">
                <label htmlFor="inputFullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control ${validationErrors.Name ? 'is-invalid' : ''}`}
                  name="Name"
                  ref={Name}
                  placeholder="Enter the full name"
                  onChange={getdata}
                  required
                />
                <div className="invalid-feedback">{validationErrors.Name}</div>
              </div>

              {/* ... (other input fields with validation) */}
              <div className="col-md-12">
                <label htmlFor="inputGender" className="form-label">
                  age
                </label>
                <input
                  type="Number"
                  className={`form-control ${validationErrors.age ? 'is-invalid' : ''}`}

                  placeholder="Enter your age"
                  name='age'
                  ref={age}
                  onChange={getdata}
                  required
                />
                <div className="invalid-feedback">{validationErrors.age}</div>

              </div>

              <div className="col-md-12">
                <label htmlFor="inputNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="Number"
                  className={`form-control ${validationErrors.mobileNo ? 'is-invalid' : ''}`}

                  name='mobileNo'
                  placeholder="Enter the number"
                  ref={mobileNo}
                  onChange={getdata}
                  required
                />
                <div className="invalid-feedback">{validationErrors.mobileNo}</div>

              </div>

              <div className="col-md-12">
                <label htmlFor="inputAge" className="form-label">
                  Enter youe username
                </label>
                <input
                  type="text"
                  className={`form-control ${validationErrors.username ? 'is-invalid' : ''}`}

                  name='username'
                  placeholder="Enter the your username"
                  ref={username}
                  onChange={getdata}
                  required
                />
                <div className="invalid-feedback">{validationErrors.username}</div>

              </div>

              <div className="col-md-6">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input type="password"
                  className={`form-control ${validationErrors.password1 ? 'is-invalid' : ''}`}
                  name='password1'
                  placeholder="Enter the your password"
                  onChange={getdata}
                  required
                
                />
                <div className="invalid-feedback">{validationErrors.password1}</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputComformPassword"
                  className="form-label">
                  Comform Password
                </label>
                <input type="password"
                  className={`form-control ${validationErrors.password ? 'is-invalid' : ''}`}
                  name='password'
                  placeholder="Enter the conform password" ref={password}
                  onChange={getdata}
                  required
                />
                <div className="invalid-feedback">{validationErrors.password}</div>

              </div>
              <div className="col-12 text-center">
                <br />
                <button
                  type="submit"
                  className="btn btn-primary w-50"
                  onClick={handeSubmit}
                >
                  Sign in
                </button>
                <br />
                <br />
                <Link to="/adminLogin">Already have an account</Link>
              </div>
            </form>
          </div>
          <div className="col-3 pt-5"></div>
        </div>
      </div>
    </form>
    <Footer></Footer>
  </>

  )
};
