import axios from 'axios';

const instance = axios.create({
  baseURL:'https://puhov-alex-react-my-burger.firebaseio.com/'
});

export default instance;