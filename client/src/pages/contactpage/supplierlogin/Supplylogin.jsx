import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
// import * as constant from '../../../REDUX/Constant/constant'
import './supplylogin.css'
import { Link, useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../redux/actions/supplierAction';
// const history = useHistory();
import Cookies from 'js-cookie';

// import Cookies from 'universal-cookie'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Supplylogin() {

  const { isAuthenticated, error, token } = useSelector(state => state.reducer);

  const tosatmessages = () => {
    toast.error("Error!", {
      position: 'top-center',
      theme: "colored",
    })
  }
  // const cookies = new Cookies()

  const navigate = useNavigate('')
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()

    // if(token){
    //   saveTokenToCookie(token)
    // }

    dispatch(login(name, password));
  };

  useEffect(() => {
    if (error) {
      tosatmessages(error)
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      const saveTokenToCookie = (token) => {
        Cookies.set('token', token)
      }
      saveTokenToCookie(token)
      navigate('/profilesupplier');
      // const cookieValue = Cookies.get('cookieName')
    }
  }, [dispatch, error, isAuthenticated, token, navigate]);

  // dispatch, error,  isAuthenticated, navigate

  // useEffect(() => {
  //   if (error) {
  //     showToast(error);
  //     dispatch(clearErrors());
  //   }

  //   if (isAuthenticated) {
  //     navigate('/profilesupplier');
  //   }
  // }, [dispatch, error, isAuthenticated, navigate]);

  //   useEffect(() => {

  //     if (getss.error) {
  //       tosatmessages()
  //       dispatch(getss.error);
  //     }

  //     if (getss.user === cookieValue) {
  //       navigate('/profilesupplier');
  //     }

  // }, 
  //   []);


  // Set a cookie
  // cookies.set('myCookie', 'cookieValue', { path: '/' });
  // Remove a cookie
  // cookies.remove('myCookie');  const cookieValue = cookies.get('myCookie');

  return (
    <>

      {/* http://localhost:8000/api/auth */}


      <div className='container-supplyl4'>
        <div className='img-supplyl4'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl4'>
          <div className="pic210l4">
            <div></div>
            <img src="/image/sq.jpg" alt="" />
            {/* <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img> */}
          </div>

          <div className="bwell4">

            {/* {data && data.map( )} */}
            <div>
              <Link to="/" className="back-button">
                <FaArrowLeft className="arrow-icon" />
                Back
              </Link>
            </div>

            <div className='wel-supplyl4'>Welcome!</div>
            <div className='div-supplyl4'>

              <div className='user1l4'>User</div>
              <div className='supply1l4'>Contractor/Supplier</div>
            </div>

            <form onSubmit={handleLogin}>
              <div className='info-supplyl4'>
                <div className='user-logl4'>
                  <label>Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter you name of  your company' />
                </div>

                <div className='user-passl4'>
                  <label>Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
                </div>
              </div>
              <div className='registration1l4'>
                {/* <Link to='/'>
                <button type='submit'>Registration</button>
              </Link> */}
                <div >
                  <button type='submit' onClick={handleLogin}>Registration</button>
                </div>
                {/* {error && <p>{error}</p>} */}
                <div className='dosulppyl4'> Don't have an account.
                  <Link to='/Supplier' className='dkrl4'>Register</Link>

                  {/* <div  className='dkrl4'>Register</div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Supplylogin



// import React, { useState, useEffect } from 'react';
// import './supplylogin.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, clearErrors } from '../../../REDUX/Actions/supplierAction';
// import Cookies from 'js-cookie';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Supplylogin() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const { isAuthenticated, error } = useSelector(state => state.reducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const saveTokenToCookie = token => {
//     Cookies.set('token', token, { expires: 7 });
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/profilesupplier');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleLogin = e => {
//     e.preventDefault();
//     dispatch(login(name, password));
//   };

//   const tosatmessages = message => {
//     toast.error(message, {
//       position: 'top-center',
//       theme: 'colored',
//     });
//   };

//   useEffect(() => {
//     if (error) {
//       tosatmessages(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error]);

//   return (
//     <>
//       <div className='container-supplyl4'>
//         <div className='img-supplyl4'>
//           <img src='/image/div2.jpg' alt='img' />
//         </div>
//         <div className='login-supplyl4'>
//           <div className='pic210l4'>
//             <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt='' />
//           </div>
//           <div className='bwell4'>
//             <div className='wel-supplyl4'>Welcome!</div>
//             <div className='div-supplyl4'>
//               <div className='user1l4'>User</div>
//               <div className='supply1l4'>Contractor/Supplier</div>
//             </div>
//             <form onSubmit={handleLogin}>
//               <div className='info-supplyl4'>
//                 <div className='user-logl4'>
//                   <label>Name</label>
//                   <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter your company name' />
//                 </div>
//                 <div className='user-passl4'>
//                   <label>Password</label>
//                   <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
//                 </div>
//               </div>
//               <div className='registration1l4'>
//                 <div>
//                   <button type='submit'>Login</button>
//                 </div>
//                 <div className='dosulppyl4'>
//                   Don't have an account. <Link to='/Supplier' className='dkrl4'>Register</Link>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default Supplylogin;