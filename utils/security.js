const md5 = require('js-md5');
const randString = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const security = {};

//  获取随机字符串
security.getRandom = (length = 8) => {
    let random = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() *randString.length);
        random+=randString.substr(index, 1)
    }
    return random ;
}
security.md5 = value => md5(value);
security.formatDate = (date, fmt = "YY-MM-DD hh:mm:ss") => {
    if (date === undefined || date === null){
        return ;
    }
    if (typeof date === "string" || typeof date === "number"){
        date = new Date(date)
    }
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "D+": date.getDate().toString(),            // 日
        "h+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}
security.isMobile = () => {
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    const userAgents = navigator.userAgent ;
    let flag = false ;
    for (let i = 0; i < agents.length ; i++) {
        const agent = agents[i];
        if (userAgents.indexOf(agent)>0){
            flag = true;
            break;
        }
    }
    return flag ;
}
security.isEmpty = value => {
    if (value === null || value === undefined || value.trim().length === 0){
        return true;
    }
    return false;
}
security.isArray = obj => {
    const str = Object.prototype.toString.call(obj);
    if (str === '[object Array]'){
        return true;
    }
    return false;
}
export default security;