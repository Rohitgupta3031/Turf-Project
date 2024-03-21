import axios from 'axios';
const URL ='http://localhost:6162';

class BookingService 
{
    //Add Booking
    addBooking(userid,turfId){
        return axios.post(URL+"/add-booking/{userid}/{turfId}" + userid , turfId);
    }
    //get all Booking details
    getBooking(){
        return axios.get(URL+"/fetch-data");
    }
    getMapping(uId){
        return axios.get(URL+"/get-user-bookings/{uId}" );
    }
}

export default new BookingService();