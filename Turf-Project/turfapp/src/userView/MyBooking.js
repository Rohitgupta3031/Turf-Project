import HeaderUser from '../common/HeaderUser'
import Footer from '../common/Footer'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function MyBooking() {
    const URL = 'http://localhost:6162';
    const [MyBook, setBooking] = useState([]);
    useEffect(() => {
        //const resuserid = localStorage.getItem("userId");
        const resuserid = sessionStorage.getItem("userId");
       // console.log(resuserid);
        axios.get(`${URL}/get-user-bookings/${resuserid}`).then((res) => {
            setBooking(res.data);
            //console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <>
            <HeaderUser></HeaderUser>
            {/* Header start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3">MyBooking</h3>
                </div>
            </div>
            {/* Header End */}
            <div className='container' >
                <div className='row pt-5 pb-5'>
                    <div className='table-responsive'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Ground Name</th>
                                    <th scope="col">Booking Id</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Cunstomer Contact</th>
                                    <th scope="col">Booking Date</th>
                                    <th scope="col">Booking Time Slot</th>
                                    <th scope="col">Total Payable Amount</th>
                                    {/* <th scope="col">Booking Status</th>
                                    <th scope="col">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {MyBook && MyBook.map((booking) => (
                                    <tr>

                                        <td scope="row">{booking?.turf?.name}</td>
                                        <td scope="row">{booking?.bookingId}</td>
                                        <td scope="row">{booking?.user?.name}</td>
                                        <td scope="row">{booking?.user?.mobileNo}</td>
                                        <td scope="row">{booking?.bookingDate}</td>
                                        <td scope="row">{booking?.timeSlot}</td>
                                        <td scope="row">{booking?.turf?.price}</td>

                                        {/* <td><button type='button' className='btn btn-danger'>Cancle Booking</button></td> */}
                                    </tr>

                                ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}