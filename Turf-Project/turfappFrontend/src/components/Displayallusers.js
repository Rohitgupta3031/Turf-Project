import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import HeaderAdmin from '../common/HeaderAdmin';
import Footer from '../common/Footer';
export default function Displayallusers() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getUser().then((res) => {
      setUsers(res.data);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    })

  }, []);


  return (

    <>

      <HeaderAdmin></HeaderAdmin>
      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">User Detail</h3>
        </div>
      </div>
      {/* Header End */}
      <div className='container' >
        <div className='row pt-5 pb-5'>
          <div className='table-responsive'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope='col'>User Id</th>
                  <th scope='col'>user Name</th>
                  <th scope='col'>User Age</th>
                  <th scope='col'>User Mobile No</th>
                  <th scope='col'>User User Name</th>
                  <th scope='col'>User Password</th>

                </tr>
              </thead>
              <tbody>
                {users && users.map((usr) => (
                  <tr>
                    <td scope="row">{usr.userId}</td>
                    <td scope="row">{usr.name}</td>
                    <td scope="row">{usr.age}</td>
                    <td scope="row">{usr.mobileNo}</td>
                    <td scope="row">{usr.username}</td>
                    <td scope="row">{usr.password}</td>
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
