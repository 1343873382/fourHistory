import axios from 'axios'


export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve, reject) => {
        let promise
            // 1. 执行异步ajax请求
        if (type === 'GET') { // 发GET请求
            promise = axios.get(url, { // 配置对象
                params: data // 指定请求参数
            })
        }
        if (type === "PUT") {
            promise = axios({
                method: 'put',
                url,
                data,
                transformRequest: [
                    function(data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        ret = ret.substring(0, ret.lastIndexOf('&'));
                        return ret
                    }
                ],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }
        if (type === "POST") { // 发POST请求
            promise = axios({
                method: 'post',
                url,
                data,
                transformRequest: [
                    function(data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        ret = ret.substring(0, ret.lastIndexOf('&'));
                        return ret
                    }
                ],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }
        // 2. 如果成功了, 调用resolve(value)
        promise.then(response => {
            resolve(response.data)

        })
    })


}