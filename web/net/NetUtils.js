import React, {Component} from 'react';

/**
 * 用Promise 封装fetch
 *
 * const promise = new Promise(function(resolve, reject) {
 *   // ... some code
 *  if (//异步操作成功){
 *    resolve(value);
 *    } else {
 *     reject(error);
 *    }
 *  });
 *  Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 *   promise.then(function(value) {
 *        // success
 *     }, function(error) {
 *        // failure
 *     });
 */
export default class NetUtils extends Component {

    static get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log('response', response)
                if (response.ok) {
                    return response.json();
                } else {
                    reject(response.error);
                }
            }).then((json) => {

                return resolve(json);
            }).catch((error) => {

                reject(error)
            })
        });
    }

    static post(url, param) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(param)
            }).then((response) => {
                console.log('response', response)
                if (response.ok) {
                    return response.json();
                } else {
                    reject(response.error);
                }
            }).then((json) => {

                return resolve(json);
            }).catch((error) => {

                reject(error)
            })
        });
    }
}