import axios from 'axios'
// import qs from 'qs'

// const URL = 'http://api.antarra.tech/api/'
const URL = 'https://api.antarracoding.com/api/v1/'

const serverCall = (config) => {
  //header authorization
    // if (Auth.user_token) {
    //   const token = Auth.getToken()
    //   config.headers = {
    //     "authorization": token
    //   }
    // }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500
        }
      }
      // if(error.response.status===401){
      //   Auth.logout()
      //   jumpTo('/login')
      //   throw error
      // }
      return Promise.reject(error);
    });
  config.baseURL = URL
  return axios(config)
}
export default serverCall