import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link, useNavigate } from 'react-router-dom'


export default function Home() {
    const [logindata, setlogindata] = useState([]);
    const history = useNavigate();

    const checklogin = () => {
        //const getusers = localStorage.getItem('userId');
        const getusers=sessionStorage.getItem("userId")
       // console.log(getusers)
        if (getusers && getusers.length > 0) {
            const user = JSON.parse(getusers);
            setlogindata(user);
            history("/turf");
        } else {
            history("/login");
        }
    }
    return (
        <>

            <Header></Header>
            {/* Carousel Start */}
            <div className="carousel-header " >

                <div id="carouselId" className="carousel slide" data-bs-ride="carousel"  >
                    <ol className="carousel-indicators">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                        <li data-bs-target="#carouselId" data-bs-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox" style={{ height: '550px' }}>
                        <div className="carousel-item active" >
                            <img src="img/score1.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/score3.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/socer4.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon btn bg-primary"
                            aria-hidden="false"
                        />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon btn bg-primary"
                            aria-hidden="false"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Carousel End */}
            {/* Booking turf start   */}

            <section className="about_section layout_padding-bottom  mt-5">

                <div className="container  ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        All<span className='a'>Turf</span>
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but
                                    the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly
                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the
                                    middle of text. All
                                </p>
                                {/* <Link to="/login" className='btn btn-primary py-2 px-5 ' >Get Click </Link> */}
                                <button  className='btn btn-primary py-2 px-5' onClick={checklogin}> Get Click</button>
                                <br /><br />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="img-box">
                                <img src="img/play1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


           
            {/* Booking turf end   */}


            {/* Gallary Start */}
            <div className="container-fluid destination py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Gallary</h5>
                        <h1 className="mb-0">Feature Artistic Representations Of Turf In Various Forms</h1>
                    </div>
                    <div className="tab-class text-center">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer10.jpeg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer11.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer12.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer1.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer2.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer3.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallary End */}
            <Footer></Footer>


        </>
    )
}
