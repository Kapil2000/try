import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../redux/actions/userAction";
import { FaArrowLeft } from 'react-icons/fa';
function RegisterationForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signUpUser({ email, userName, password }));
    // console.log(email, userName, password);
    console.log("Registered Successfully");
    // console.log(navigator.cookieEnabled);
  };

  return (
    <>
      <div className="container-supplyl2">
        <div className="img-supplyl2">
          {/* <img src='/image/div2.jpg' alt='img' /> */}
          <img src="/image/div1.jpg" alt="img" />
        </div>






        <form onSubmit={handleSubmit} className="login-supplyl2">
          <div className="pic210l2">
            <div></div>
            <img
              src="/image/sq.jpg"
              alt=""
            ></img>
          </div>
          <div>
            <Link to="/" className="back-button">
              <FaArrowLeft className="arrow-icon" />
              Back
            </Link>
          </div>
          <div className="bwell2">
            <div className="wel-supplyl2">Welcome!</div>
            <div className="div-supplyl2">
              <Link to="/login" className="user1l2">
                User
              </Link>
              <Link to="/supplier" className="supply1l2">
                Contractor/Supplier
              </Link>
            </div>
            <div className="info-supplyl2">
              <div className="user-logl2">
                <label>Email Address/Phone no</label>
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="user-log2l2">
                <label>User name</label>
                <input
                  type="text"
                  placeholder="Enter your User name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="user-passl2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="registration1l2">
              <Link to="" className="butlerl2">
                <button onClick={handleSubmit} type="submit">
                  Sign Up
                </button>
              </Link>
              <div className="dosulppyl2">
                {" "}
                Already have an account.
                <Link to="/" className="dkrl2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterationForm;