import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Service() {
  return (
    <>
    <Header></Header>
    {/* Header start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3">Services</h3>
    </div>
  </div>
  {/* Header End */}
  {/* Services Start */}
  <div className="container-fluid bg-light service py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Searvices</h5>
        <h1 className="mb-0">Our Services</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h5 className="mb-4">WorldWide Tours</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-globe fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h5 className="mb-4">Hotel Reservation</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-hotel fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h5 className="mb-4">Travel Guides</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-user fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content text-end">
                  <h5 className="mb-4">Event Management</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-cog fa-4x text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-globe fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">WorldWide Tours</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-hotel fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Hotel Reservation</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-user fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Travel Guides</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-cog fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Event Management</h5>
                  <p className="mb-0">
                    Dolor sit amet consectetur adipisicing elit. Non alias eum,
                    suscipit expedita corrupti officiis debitis possimus nam
                    laudantium beatae quidem dolore consequuntur voluptate rem
                    reiciendis, omnis sequi harum earum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
 <Footer></Footer>
  
</>

  )
}
