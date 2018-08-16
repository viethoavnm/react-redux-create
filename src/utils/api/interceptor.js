import axios from 'axios';

export default function () {
  axios.interceptors.response.use(
    function (response) {
      return response;
    }, function (error) {
      //ERROR HANDLER
      return Promise.reject(error);
    });
}