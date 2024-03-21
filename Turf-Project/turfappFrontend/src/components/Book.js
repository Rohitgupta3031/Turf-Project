import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { json, useNavigate } from 'react-router-dom';

export default function Book() {
    const [logindata, setlogindata] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        BookingPage();
    }, []);

    const BookingPage = () => {
        // const getusers = localStorage.getItem("userId");
        const  getusers=sessionStorage.getItem("userId");
        if (getusers && getusers.length > 0) {
            const user = JSON.parse(getusers);
            setlogindata(user);

        } else {
            history("/login");
        }
    }
    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <Header></Header>
                        {/* Header start */}
                        <div className="container-fluid bg-breadcrumb">
                            <div className="container text-center" style={{ maxWidth: 900 }}>
                                <h3 className="text-white display-3">Book</h3>
                            </div>
                        </div>
                        {/* Header End */}

                        <div className="container py-2">
                            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            </div>
                        </div>



                        <div className="container-fluid booking py-5">
                            <div className="container py-5">
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6">
                                        <h5 className="section-booking-title pe-3">Booking</h5>
                                        <h1 className="text-white mb-4">Online Booking</h1>
                                        <p className="text-white mb-4">
                                            It seems like you're looking for information or assistance related to turf booking.
                                            However, your request is a bit vague.
                                            To provide you with more accurate and helpful information,
                                            could you please provide more details or clarify your request?
                                            Are you looking for contact information for a specific turf booking service or platform?
                                        </p>
                                        <p className="text-white mb-4">
                                            We are looking to [mention the date(s) and time(s) if known]
                                            for our activity, and any guidance you can provide would be immensely helpful.
                                            I can be reached at [your contact information],
                                            and I am available at your earliest convenience to discuss the details.
                                        </p>
                                        <p className="text-white mb-4">Thank you for your time, and I look forward to the opportunity
                                            to utilize your excellent turf facilities.</p>
                                        <a
                                            href="#"
                                            className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="text-white mb-3">Book A Tour Deals</h1>
                                        <p className="text-white mb-4">
                                            I am available for a discussion at your convenience, and you can reach me at [your contact information]. Thank you for considering our request, and I look forward to the possibility of collaborating with your esteemed facility.
                                        </p>
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control bg-white border-0"
                                                            id="name"
                                                            placeholder="Your Name"
                                                        />
                                                        <label htmlFor="name">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className="form-control bg-white border-0"
                                                            id="email"
                                                            placeholder="Your Email"
                                                        />
                                                        <label htmlFor="email">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div
                                                        className="form-floating date"
                                                        id="date3"
                                                        data-target-input="nearest"
                                                    >
                                                        <input
                                                            type="datetime-local"
                                                            className="form-control bg-white border-0"
                                                            id="datetime"
                                                            data-target="#date3"
                                                            data-toggle="datetimepicker"
                                                        />
                                                        <label htmlFor="datetime">Date &amp; Time</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="number"
                                                            className="form-control bg-white border-0"
                                                            id="datetime"
                                                            min="0" max="10"
                                                            data-toggle="datetimepicker"
                                                        />
                                                        <label htmlFor="select1">Number of Player</label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="number"
                                                            className="form-control bg-white border-0"
                                                            id="name"
                                                            min="1" max="24"
                                                            placeholder="Your Name"
                                                        />
                                                        <label htmlFor="hours">Hours</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Open</option>
                                                            <option value="1">9'0 clock - 11'0 clock </option>
                                                            <option value="2">12'0 clock - 2'0 clock </option>
                                                            <option value="3">4'0 clock  - 6'0 clock </option>
                                                            <option value="3">7'0 clock  - 10'0 clock </option>
                                                        </select>
                                                        <label htmlFor="email">Slot</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="btn btn-primary text-white w-100 py-3"
                                                        type="submit"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container py-1">
                            <div className="mx-auto text-center mb-1" style={{ maxWidth: 900 }}>
                            </div>
                        </div>
                        <Footer></Footer>

                    </>
            }
        </>
    )
}