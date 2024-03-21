import axios from 'axios';
const URL ='http://localhost:6162';

const Ground=
{
    //Add Ground
    addGround(mId,Ground){
        return axios.post(URL+"/input/turf-data/save/" + mId , Ground,{
            headers:{"Content-Type":"multipart/form-data"}
        });
    },
    //get all Ground details
    getGround(){
        return axios.get(URL+"/input/get-allTurf");
    },

    getOneGround(tId){
        return axios.get(URL+"/get-one/{tId}");
    }

    

}

export default Ground;