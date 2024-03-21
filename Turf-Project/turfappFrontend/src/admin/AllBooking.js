import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../common/HeaderAdmin'
import Footer from '../common/Footer'
import BookingService from '../Services/Booking';
import { useNavigate } from 'react-router-dom';

export default function AllBooking() {

    const [Booking, setBooking] = useState([]);
    const history=useNavigate();

    const getallBookings = async () => {
        await BookingService.getBooking().then((res) => {
            setBooking(res.data);
           // console.log(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const BookingPage = () => {
        const getusers=sessionStorage.getItem("managerId");
        //const getusers = localStorage.getItem("managerId");
        if (getusers && getusers.length > 0) {
            //const user = JSON.parse(getusers);
            history("/allBooking");
        } else {
            history("/adminLogin");
        }
    }
    useEffect(() => {
        getallBookings();
        BookingPage();
    }, []);


  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">All Booking</h3>
        </div>
      </div>
      {/* Header End */}
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Ground Name</th>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Cunstomer Contact</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col">Booking Time Slot</th>
                  <th scope="col">payment type</th>
                  {/* <th scope="col">Booking Status</th> */}
                </tr>
              </thead>
              <tbody>
                {Booking &&
                  Booking.map((booking) => (
                    <tr>
                      <td scope="row">{booking?.turf?.name}</td>
                      <td scope="row">{booking?.bookingId}</td>
                      <td scope="row">{booking?.user?.name}</td>
                      <td scope="row">{booking?.user?.mobileNo}</td>
                      <td scope="row">{booking?.bookingDate}</td>
                      <td scope="row">{booking?.timeSlot}</td>
                      <td scope="row">cash...</td>
                      {/* <td scope="row">{act} </td> */}
                      <td>
                        {/* <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleAction}
                        >
                          Verify
                        </button> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
