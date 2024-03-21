import axios from 'axios';
const URL ='http://localhost:6162';

const AdminService =
{
    //Add admin
    addAdmin(Admin){
        return axios.post(URL+"/managerregister-api",Admin);
    },
    //get all admin details
    getAdmin(){
        return axios.get(URL+"/managerregister-api");
    },
    //delete user by userId
    deteteAdminbyId(adminId){ 
        return axios.delete(URL+"/managerregister-api"+adminId);
    },
    //find user by userId
    checkAdminbyId(adminId){ 
        return axios.post(URL+"/managerregister-api",adminId);
    },//Find the login
    loginCheck(Admin){
        return axios.post(URL+"/manager-login",Admin);
    }
}

export default AdminService;