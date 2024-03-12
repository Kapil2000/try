import React from 'react'
import './viewdetails.css'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
import { useLocation } from 'react-router-dom';


function ViewDetails() {
    const location = useLocation();
    const item = location.state.id;
    return (
        <>
            <Navbar />
            <div className="vmaindv">
                <div className="constructiondv">
                    <div className="cont1dv">
                        <div className="photodv">
                            <img className='img0dv' src={item.image} alt='' />
                        </div>
                        <div className="rightdv">
                            <div className="mmdv">
                                <div className="mm2dv"></div>
                                <button type='submit' className='upperdv'>Send Enquiry</button>
                            </div>
                            <h4>{item.name}</h4>
                            <p className='smedv'>{item.name} Co. for your for your next Construction project </p>
                            <div className="threes">
                                <span className='t1'>Service-Construction</span>
                                <span className='t2'><i className="fa-solid fa-phone"></i>{item.phone}</span>
                                <span className='t3'>$100 to $200 per square foot</span>

                            </div>
                            <hr />

                            <div className="urightdv">
                                <p><i className="fa-solid fa-location-dot"></i>{item.city}</p>
                            </div>
                            {/* {payment && <Send band={band} />}  onClick={Mymodel} */}
                        </div>
                    </div>
                    {/* <hr /> */}
                    <div className="aboutus">
                        <h3>About Us</h3>
                        <p>{item.name} Co., are a reputable construction company known for our commitment to excellence and quality craftsmanship. With years of experience in the industry, we have successfully completed numerous projects, ranging from residential buildings to commercial complexes. What sets us apart is our attention to detail and dedication to customer satisfaction. We pride ourselves on delivering projects on time and within

                            budget, while maintaining the highest standards of quality and safety.</p>

                    </div>
                    <div className="vphotos">
                        <h3>Photos</h3>
                        <div className="photo5">
                            <img className='img1dv' src={item.image} alt='' />
                            {/* <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' /> */}
                            <img className='img1dv' src={item.image} alt='' />
                            <img className='img1dv' src={item.image} alt='' />
                            {/* <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                       <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ViewDetails;