import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
export default function Error404() {
  return (
    <>
    <Header></Header>
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3 className="text-white display-3 mb-4">404 Page</h3>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">404 Page</li>
        </ol>
      </div>
    </div>
    {/* Header End */}
    {/* 404 Start */}
    <div
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))",
        objectFit: "cover"
      }}
    >
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary" />
            <h1 className="display-1">404</h1>
            <h1 className="mb-4 text-dark">Page Not Found</h1>
            <p className="mb-4 text-dark">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <a
              className="btn btn-primary rounded-pill py-3 px-5"
              href="./home"
            >
              Go Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
  
  )
}
