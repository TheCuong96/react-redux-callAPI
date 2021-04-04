import axios from "axios";

export default function CallApiURL(method,endpoint,body) {
    return axios({
        method:method,
        url:`http://localhost:3000/${endpoint}`,
        data:body
    }).catch(err => {
        console.log(err);
    })  
}