import axios from 'axios';

const development = 'http://localhost:5000';
// const production = 'https://lms-backend-alpha-hy24ytk54-ashu08-codes-projects.vercel.app'

const instance = axios.create({ baseURL: development });
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.params = {
    // 'user_id' : localStorage.getItem("star_uId"),
    // 'user_id' : localStorage.getItem("star_upass"),
}
export default instance