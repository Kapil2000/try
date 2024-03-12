import React, { useState } from 'react'
import "./upcategory.css"
import Send from '../../../pages/categorypage/Popup/Send'
// import ViewDetails from './ViewDetails'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
// import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setLike } from '../../../redux/actions/likeAction'
import { setFetch } from '../../../redux/actions/fetchcardsAction'
import { useSelector } from 'react-redux';
// import fetchReducer from '../../../redux/reducers/fetchcardReducer'

function Upcategary() {
    const dispatch = useDispatch('')
    useEffect(() => {
        dispatch(setFetch()); // Dispatch action to fetch data when component mounts
    }, [dispatch]);
    const [like, setLiked] = useState('');
    // const [fetch, setFetch] = useState('')
    const { data } = useSelector(state => state.fetchReducer);
    const handleFetch = (id) => {
        // e.preventDefault()
        dispatch(setFetch(id))
    }
    // axios.get('http://localhost:8000/api/auth/fetch-contractor', {})
    // .then(response => {
    // console.log(response.data);
    // })
    // .catch(error => {
    // console.error('Error updating data:', error);
    // });

    // axios.get('http://localhost:8000/api/auth/search', {})
    // .then(response => {
    // console.log(response.data);
    // })
    // .catch(error => {
    // console.error('Error updating data:', error);
    // });
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setLike(like))
        // axios.post('http://localhost:8000/api/auth/like', { like })
    }

    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {
        setPayment(true);
    }

    const navigate = useNavigate();
    const handleRedirect = (id) => {
        // Redirect logic here
        navigate('/ViewDetails', { state: { id } }); // Use the navigate function from useNavigate
    };

    // const navigate1 = useNavigate();

    // const handleRedirect1 = () => {
    // Redirect logic here
    //  navigate1('/Searcher');  Use the navigate function from useNavigate
    // };

    return (
        <>
            <Navbar />
            <div className="main">
                <div className="imgc">
                    <img className='imghead' src='https://s3-alpha-sig.figma.com/img/c9d6/33d1/c15e5e78a1c3e43b8d1289ad583a5fd4?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekRU8sGiEglmifzKQ32aotspCsyCZQodEIUn4msFp-CTfsQcB7jdOxYXlPi3kNTTC0BLKlwYgWRKCLHc7gqoghB5~r2vWpWFmSxLjLnC5xk-w3w6IZ9J0eYn24Upkp8mo71e4x1m5WriDO5OnPgNApvnAxN1hU3~TnbLPA6-XbMqrQtDCU-aR0-J1KsM4CIEhb36H~Fr5wCIvxdjJgds5EY5rNTjKeoXI-T0iJPX-CxFtpIYfwgZuh1uC6zKOoVRmXh00F3nssL~UyeeckrdezaQOnN7Gg75S2HQqs1wYd~NgyY2Rf4ZK2FOogbcffcegOT4CeEaRPk9roNjhNezhQ__' alt="Description" />
                </div>
                <div className="bannert">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>
                <div className="onimage">
                    <button type='submit' className='btn01'><p>Location <p className='mm01'>Ex Noida</p></p> </button>
                    <button type='submit' className='btn1'>Services<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn1'>Budget<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn2' ><span class="material-symbols-outlined">
                        search
                    </span>Search</button>
                    {/*  */}
                </div>
                {/* {data.myData.map((item, index) => ( */}
                {data && data.myData.map((item) => (
                    <div className="doubleCard" key={item.id} onClick={() => handleFetch(item.id)}>
                        {/* <div className="full0"> */}
                        {/*  */}
                        <div className="construction">
                            <div className="mm">
                                <div className="mm2"></div>
                                <span className='upper'>Construction</span>
                            </div>
                            <div className="cont10">
                                <div className="photo">
                                    <img className='img10' src={item.image} alt='' />
                                    {/* <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                                </div>
                                <div className="right">
                                    <h4>{item.name}</h4>
                                    <p className='sme'>{item.name} Co. for your for your next Construction project</p>

                                    <div className='t30'>$100 to $200 per square foot</div>
                                    <div className="loca0">
                                        <span><i className="fa-solid fa-location-dot"></i>{item.city},{item.state}</span>

                                    </div>
                                    <div className="uright10">
                                        <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                        <button type='submit' onClick={() => handleRedirect(item)} className='numbtn0'>View Details</button>
                                        <i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} onSubmit={handleSubmit}></i>
                                        {payment && <Send band={band} />}
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className="full1"> */}
                        {/* <span className='upper'>Construction</span> */}
                        {/* <div className="construction"> */}
                        {/* <div className="mm"> */}
                        {/* <div className="mm2"></div> */}
                        {/* <span className='upper'>Construction</span> */}
                        {/* </div> */}
                        {/* <div className="cont10"> */}
                        {/* <div className="photo"> */}
                        {/*  */}
                        {/* <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                        {/* </div> */}
                        {/* <div className="right"> */}
                        {/* <h4>Shubham Construction Co.</h4> */}
                        {/* <p className='sme'>Shubham Construction Co. for your for your next Construction project</p> */}
                        {/* <div className='t30'>$100 to $200 per square foot</div> */}
                        {/* <div className="loca0"> */}
                        {/* <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span> */}
                        {/*  */}
                        {/* </div> */}
                        {/* <div className="uright10"> */}
                        {/* <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button> */}
                        {/* <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button> */}
                        {/* <i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)}></i> */}
                        {/* {payment && <Send band={band} />}    */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                ))}
                {/* --------------------------second double------------------------------------------------------------------------ */}

                {/* <div className="doubleCard" onClick={handleFetch}> */}
                {/* <div className="full0"> */}


                {/* <div className="construction"> */}
                {/* <div className="mm"> */}
                {/* <div className="mm2"></div> */}
                {/* <span className='upper'>Construction</span> */}
                {/* </div> */}
                {/* <div className="cont10"> */}
                {/* <div className="photo"> */}
                {/* <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                {/* </div> */}
                {/* <div className="right"> */}
                {/* <h4>Shubham Construction Co.</h4> */}
                {/* <p className='sme'>Shubham Construction Co. for your for your next Construction project</p> */}
                {/* <div className='t30'>$100 to $200 per square foot</div> */}
                {/* <div className="loca0"> */}
                {/* <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span> */}
                {/* </div> */}
                {/* <div className="uright10"> */}
                {/* <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button> */}
                {/* <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button> */}
                {/* <i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)}></i> */}
                {/* {payment && <Send band={band} />}    */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* ------------------- 2nd------------------------------------------------------------------------------------- */}
                {/* <div className="full1"> */}
                {/* <span className='upper'>Construction</span> */}

                {/* <div className="construction"> */}

                {/* <div className="mm"> */}
                {/* <div className="mm2"></div> */}
                {/* <span className='upper'>Construction</span> */}
                {/* </div> */}
                {/* <div className="cont10"> */}
                {/* <div className="photo"> */}
                {/* <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                {/* </div> */}
                {/* <div className="right"> */}
                {/* <h4>Shubham Construction Co.</h4> */}
                {/* <p className='sme'>Shubham Construction Co. for your for your next Construction project</p> */}
                {/* <div className='t30'>$100 to $200 per square foot</div> */}
                {/* <div className="loca0"> */}
                {/* <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span> */}

                {/* </div> */}
                {/* <div className="uright10"> */}
                {/* <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button> */}
                {/* <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button> */}
                {/* <i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} ></i> */}
                {/* {payment && <Send band={band} />}    */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>
            {/* </div > */}
            {/* </div > */}
            <Footer />
        </>
    )
}

export default Upcategary;