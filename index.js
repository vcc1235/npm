import http from 'axios/http'
import service from 'axios/service'
import security from 'utils/security'
const XServer = {}
XServer.install = function(Vue, options){
    Vue.prototype.$xService = http;
    Vue.prototype.$xhttp = service;
}
security.install = function(Vue, options) {
    Vue.prototype.$xUtil = security;
}
export Security = security;
export default XServer;