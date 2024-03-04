import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
  {/* Footer Start */}
  <div className="container-fluid footer ">
    <div className="container py-5">
      <div className="row g-5 ">
        <div className="col-md-6 col-lg-6 col-xl-4 text-center">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white footertext">Get In Touch</h4>
            <Link to="">
              <i className="fas fa-home me-2" /> 123 Street, Adgaon, Nashik
            </Link>
            <Link to="">
              <i className="fas fa-envelope me-2" />Demo@gmail.com
            </Link>
            <Link to="">
              <i className="fas fa-phone me-2" />+91 9098984980
            </Link>
            
            <div className="d-flex" style={{marginLeft:"4rem"}}>
              
              <i className="fas fa-share fa-2x text-white "/>
              <Link
                className="btn-square btn btn-primary  mx-1 text-center "
            Link to="https://www.facebook.com"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="btn-square btn btn-primary rounded-circle mx-1"
            Link to="https://twitter.com/i/flow/login"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="btn-square btn btn-primary rounded-circle mx-1"
            Link to="https://www.instagram.com"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="btn-square btn btn-primary rounded-circle mx-1"
            Link to="https://in.linkedin.com"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 text-center">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Sports</h4>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Cricket
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Basketball
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> FootBall
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Hockey 
            </Link>
            
            
           
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 text-center">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Support</h4>
            
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Legal Notice
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Privacy Policy
            </Link>
            <Link to="#">
              <i className="fas fa-angle-right me-2" /> Terms and Conditions
            </Link>
            <Link to="/adminLogin">
            <i className="fas fa-angle-right me-2" /> LoginAdmin
            </Link>
           
          </div>
        </div>
        
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright  py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <p className='h5' style={{textAlign:"center", color:"white"}}>
          <Link to="#"><b> Turf Mangement</b></Link>&copy; Power By Team
          </p>
        </div>
        
      </div>
    </div>
  </div>
  {/* Copyright End */}


  {/* Back to Top */}
  <Link
Link to="#"
    className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
  >
    <i className="fa fa-arrow-up" />
  </Link>
</>

  )
}
