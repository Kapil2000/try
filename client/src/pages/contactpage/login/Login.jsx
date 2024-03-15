import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useAuth } from "../../../store/auth";
import { signInUser } from "../../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaArrowLeft } from 'react-icons/fa';
function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const storeTokenInLS = useAuth();
  // const data  = useSelector(state=>state)
  // console.log(data)

  const handleSubmit = () => {
    console.log("Login Successfully")
    // console.log(userName)
    dispatch(signInUser({ userName, password }));
  };
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    // Redirect logic for back button
    navigate('/'); // Specify your desired page URL here
  };
  return (
    <>
      <div className="container-supplyl1">
        <div className="img-supplyl1">
          {/* <img src='/image/div2.jpg' alt='img' /> */}
          <img src="/image/div1.jpg" alt="img" />
        </div>
        <div className="login-supplyl1">
          <div className="pic210l1">
            <div>
              <Link to="/" className="back-button">
                <FaArrowLeft className="arrow-icon" />
                Back
              </Link>
            </div>
            <div></div>
            <img
              src="/image/sq.jpg" // change 
              // src="https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__"
              alt=""
            ></img>
          </div>

          {/* <div> */}
          {/* <button className="back-button" onClick={handleBackButtonClick}>Go Back</button> */}
          {/* </div> */}
          <form onSubmit={handleSubmit} className="bwell1">
            <div className="wel-supplyl1">Welcome!</div>
            <div className="div-supplyl1">
              <Link to="/login" className="user1l1">
                User
              </Link>
              <Link to="/supplier" className="supply1l1">
                Contractor/Supplier
              </Link>
            </div>
            <div className="info-supplyl1">
              <div className="user-logl1">
                <label>User name</label>
                <input
                  type="text"
                  placeholder="Enter your User name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              {/* <div className='user-log2'>
                <label>User name</label>
                <input type="text" placeholder='Enter your User name' />
              </div> */}
              <div className="user-passl1">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="checkforl1">
              <div className="checkedl1">
                <input type="checkBox" />
                <label> Remember me</label>
              </div>
              <div className="forgetl1">Forget Password?</div>
            </div>
            <div className="registration1l1">
              <Link to="" className="butlerl1">
                <button onClick={handleSubmit} type="submit">
                  Login
                </button>
              </Link>
              <div className="dosulppyl1">
                {" "}
                Don't have an account.
                <Link to="/Signup" className="dkrl1">
                  Sign Up
                </Link>
              </div>
            </div>
            {/* <div className="lastl1">
              <div className="orl1"><span>Or login with</span>
                <div className='iconbtn1l1'>
                  <img src='/image/google 1.png' alt='img' /><span>Login with Google </span>
                </div>
                <div className='iconbtn2l1'>
                  <img src='/image/facebook 1.png' alt='img' /><span>Login with Facebook</span>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;