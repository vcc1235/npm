import service from 'axios/service'
const http = {

}
const response = res => {
    if(res.code === 200){
        return Promise.resolve(res.data);
    }
    return Promise.reject(new Error(res.msg));
}
const error = error => Promise.reject(error);
http.post = function(url, data = {}, params = {}, headers = {}) {
    return service.post(url, data, {
        params: params,
        headers: headers
    }).then(response, error);
};
http.get = function(url, params, headers) {
    return service.get(url, {
        params,
        headers
    }).then(response, error);
}
export default http;