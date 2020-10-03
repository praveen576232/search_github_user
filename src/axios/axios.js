import Axios from 'axios';
const instance = Axios.create({
    baseURL:'https://api.github.com'
});
export default instance;
