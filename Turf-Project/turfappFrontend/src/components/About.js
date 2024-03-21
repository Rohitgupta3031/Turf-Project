import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function About() {
  return (
    <>
    <Header></Header>
    
    {/* Header start */}
  <div className="container-fluid bg-breadcrumb ">
    <div className="container text-center" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3">About Us</h3>
    </div>
  </div>
  {/* Header End */}
  {/* About Start */}
  <div className="container-fluid about py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div
            className="h-100"
            style={{
              border: "20px solid",
              borderColor: "transparent #13357B transparent #13357B"
            }}
          >
            <img
              src="img/socer8.jpg"
              className="img-fluid w-100 h-100"
              alt=""
            />
          </div>
        </div>
        <div
          className="col-lg-7"
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/trufLogo.png)"
          }}
        >
          <h5 className="section-about-title pe-3">About Us</h5>
          <h3 className="mb-4">
             <span className="text-primary"> Welcome To My Turf</span>
          </h3>
          <p className="mb-4">
             <h3>Introduction to the Company/Organization:</h3>
             <h6>Provide a brief introduction to your company or organization.
             Include information such as when it was established,
             its mission, and any core values.
             </h6><br />
             <h3>Background on Turf:</h3>
             <h6>Offer a section that provides information about the significance of turf in your context. 
              This could include details about the types of turf, their uses, and why they are important.
             </h6><br />
             <h3>Team Members:</h3>
             <h6>Introduce key members of your team. Include their roles, expertise,
               and a bit about their background. 
              This adds a personal touch and builds trust with your audience.</h6>
          </p>
          <p className="mb-4">
             <h3>Customer Testimonials:</h3>
             <h6>If applicable, include testimonials from satisfied customers.
               This can help build
               credibility and trust with potential clients.
             </h6><br />
             <h3>Achievements or Milestones:</h3>
             <h5>Highlight any significant achievements or milestones your company has reached.
               This could include awards, certifications, or notable projects.
             </h5><br />
             <h3>Contact Information:</h3>
             <h5>Provide clear contact information. This includes a contact form,
               email address, phone number, and potentially a physical address if applicable.</h5>
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                First Class Flights
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Social Media Links:
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />5 Star
                Map (if applicable):
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                FAQs (Frequently Asked Questions):
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Personnel Responsible for Contact:
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                24/7 Service
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  <Footer></Footer>
  
</>

  )
}
