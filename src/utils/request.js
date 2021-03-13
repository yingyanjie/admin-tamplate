import axios from 'axios';
import { Message } from 'element-ui';
import Cookies from "js-cookie"
import { showLoading, hideLoading } from "@/utils/loading";

/**
 * 获取localSorage对应字段
 * @param {String} properName
 */
const getValue = properName => localStorage.getItem(properName)

const service = axios.create({
  //   baseURL: '/api-user',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // ...headerParams,
  },
});

service.interceptors.request.use(
  config => {
    config.headers.common['Content-Type'] = "application/json; charset=utf-8; application/x-tenantid-header"
    config.headers.common['x-tenantid-header'] = getValue("tenantId")
    config.headers.common['x-tenant-schema'] = getValue("tenant")
    config.headers.common['x-ltdno-header'] = getValue("ltdno")
    config.headers.common['x-username-header'] = encodeURI(getValue("username"))
    config.headers.common['x-userid-header'] = getValue("userId")
    let token = getValue("token");
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }
    if (!(config?.config?.showLoading)) {
      showLoading();
    }
    return config;
  },
  error => {
    hideLoading();
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    // console.log('fullfilled:', response);
    hideLoading();
    return response.data;
  },
  error => {
    // events.emitter.emit(events.SHOW_LOADING, false);
    // console.log(error.response)
    let res = error.response.data;
    let feedbackMsg = (res.details && res.details.length > 0) ? res.details.join(',') : (res.message || res.errorMessage || res.exception);
    // let feedbackMsg = res.exception
    if (error.response.config.responseType === 'arraybuffer') {
      let blob = new Blob([error.response.data])
      let reader = new FileReader()
      reader.readAsText(blob, 'utf-8')
      reader.onload = () => {
        res = JSON.parse(reader.result)
        Message({
          message: res.exception,
          type: 'error',
          duration: 3 * 1000,
          customClass: 'request-error-message'
        });
      }
    } else {
      Message({
        message: feedbackMsg,
        type: 'error',
        duration: 3 * 1000,
        customClass: 'request-error-message'
      });
    }
    if (res.errorType === 'gateway.jwt_token_valid_fail') {
      setTimeout(() => {
        Cookies.remove("token");
        Cookies.remove("visitedViews");
        localStorage.removeItem('perms');
        localStorage.removeItem('menus');
        location.reload();
      }, 1000)
    }
    hideLoading();
    return Promise.reject(error);
  }
);

export default service;