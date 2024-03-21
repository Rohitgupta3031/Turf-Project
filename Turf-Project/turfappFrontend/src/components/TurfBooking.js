import React, { useEffect, useRef, useState } from "react";
import HeaderUser from "../common/HeaderUser";
import Footer from "../common/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TurfBooking() {
  const history = useNavigate();
  const URL = "http://localhost:6162";
  const [groumd, setTurfDetails] = useState([]);
  const [Review, setReviewDetails] = useState([]);

  const [userid, setUserid] = useState();
  const [turfId, setturfid] = useState();

  const Slot = useRef();
  const date = useRef();
  const description = useRef();

  const [showFields, setShowFields] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", description.current.value);
      axios.post(`${URL}/add-review/${turfId}/${userid}`, formData);
      alert(" review submitted successfully!");
    } catch (error) {
      alert("Error saving data!");
    }
  };
  // const BookingPage = () => {
  //   const getusers = localStorage.getItem("userId");
  //   if (getusers && getusers.length > 0) {
  //     //const user = JSON.parse(getusers);
  //     history("/turfBooking");
  //   } else {
  //     history("/");
  //   }
  const BookingPage = () => {
    // const getusers = localStorage.getItem("userId");
    const getusers = sessionStorage.getItem("userId");
    if (getusers && getusers.length > 0) {
      history("/turfBooking");
    } else {
      history("/");
    }
  };

  useEffect(() => {
    BookingPage();
    //const resuserid = localStorage.getItem("userId");
    //const resturfrid = localStorage.getItem("turfId");
    const resuserid = sessionStorage.getItem("userId");
    const resturfrid = sessionStorage.getItem("turfId");
    setUserid(resuserid);
    setturfid(resturfrid);

    axios
      .get(`${URL}/get-one/${resturfrid}`)
      .then((res) => {
        setTurfDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${URL}/getReview/${resturfrid}`)
      .then((res) => {
        setReviewDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handelSubmitBook = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("slot", Slot.current.value);
      formData.append("date", date.current.value);

      await axios
        .post(`${URL}/add-booking/${userid}/${turfId}`, formData)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            alert("Data saved successfully!");
          } else {
            alert("this is already booked!");
          }
        });
    } catch (error) {
      alert("Error saving data!");
      console.error(error);
    }
  };

  return (
    <>
      <HeaderUser />

      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Turf Booking</h3>
        </div>
      </div>
      {/* Header End */}

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-xl-3 col-md-12 g-3">
            <div className="col-12">
              <img
                className="img-fluid w-100 rounded "
                src={"TurfImage/TurfImage/" + groumd.image}
                alt="Image"
                style={{ height: "31rem", width: "450px" }}
              />
            </div>
          </div>

          <div className="col-xl-6 col-md-12 g-2 rounded">
            <div className="container">
              <div className="blog-content border border-top-2 rounded p-4 bg-light">
                <h2>{groumd.name}</h2>

                <div className="row">
                  <p className="my-3">
                    <h4>{groumd.description}</h4>
                  </p>

                  <div className="col-6">
                    <p className="my-1">Ground Width:{groumd.width}</p>
                    <p></p>

                    <p className="my-1">Ground Length:{groumd.length}</p>

                    <div className="form-floating">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        ref={Slot}
                      >
                        <option selected>Open</option>
                        <option value="9'0  - 11'0 ">
                          9'0 clock - 11'0 clock{" "}
                        </option>
                        <option value="11'0 - 1'0 ">
                          11'0 clock - 1'0 clock{" "}
                        </option>
                        <option value="1'0  - 3'0 ">
                          1'0 clock - 3'0 clock{" "}
                        </option>
                        <option value="3'0  - 5'0 ">
                          3'0 clock - 5'0 clock{" "}
                        </option>
                        <option value="5'0  - 7'0 ">
                          5'0 clock - 7'0 clock{" "}
                        </option>
                        <option value="7'0  - 9'0 ">
                          7'0 clock - 9'0 clock{" "}
                        </option>
                      </select>
                      <label htmlFor="email">Slot</label>
                    </div>
                    <br />
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="date"
                        className="form-control bg-white border-0"
                        id="datetime"
                        name="date"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                        ref={date}
                      />
                      <label htmlFor="datetime">
                        <b>Date &amp; Time</b>
                      </label>
                    </div>

                    <br />

                    <Link to="//turfBooking" className="h5">
                      Price: {groumd.price}/hr
                    </Link>
                  </div>

                  <div className="col-md-6 ">
                    <div className="col-12 text-center ">
                      <img
                        className="img-fluid w-75  rounded-50 border m-3"
                        style={{
                          height: "15rem",
                          borderRadius: "12px",
                          WebkitBoxShadow: "5px 5px 10px  black",
                        }}
                        src="img/phonephe.jpeg"
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>

                <div className="row">
                  <div className="col-md-3 col-xl-3">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill py-2 px-4 "
                      onClick={handelSubmitBook}
                    >
                      Book
                    </button>
                  </div>
                  &nbsp;
                  <div className="col-md-3 col-xl-3">
                    <button
                      onClick={() => setShowFields(true)}
                      className="btn btn-primary rounded-pill py-2 px-4 "
                    >
                      Review
                    </button>

                    {showFields && (
                      <form onSubmit={handleSubmit}>
                        <br />
                        <textarea
                          name="description"
                          className=""
                          style={{ borderRadius: "10px" }}
                          placeholder="Enter The Description"
                          ref={description}
                        />
                        <br />
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill py-2 px-4"
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-12 bg-light g-2 rounded">
            <div className="container">
              <div className="row overflow-scroll" style={{ height: "30rem" }}>
                <div className="col-12">
                  <div className="blog-content  py-4  mt-2">
                    {Review.map((review) => (
                      <tr>
                        <h5>{review.user.username}</h5>
                        <p>{review.description}</p>
                        <hr />
                      </tr>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
