import Axios from 'axios';

const service = Axios.create({

});

service.interceptors.request.use(config => {
    return config ;
},error => Promise.reject(error));
service.interceptors.response.use(res => {
    if(res.status == 200){
        return Promise.resolve(res.data);
    }
    return Promise.reject(res.statusText);
}, error => Promise.reject(error));

export default service;