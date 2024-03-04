import axios from 'axios';
const URL ='http://localhost:6162';

const UserService={
    // Add users 
    addUser(Users){
        return axios.post(URL+"/userregister-api",Users);
    },
    //get all user details 
    getUser(){
        return axios.get(URL+"/userregister-api");
    },
    //delete user by userId
    deteteUserbyId(userId){ 
        return axios.delete(URL+"/userregister-api"+userId);
    },
    //find user by userId
    checkuserbyId(userId){ 
        return axios.post(URL+"/userregister-api",userId);
    },
    //find user by userId
    loginCheck(Users){
        return axios.post(URL+"/user-login",Users);
    }
    }


    export default UserService;
    
    ///managerregister-api