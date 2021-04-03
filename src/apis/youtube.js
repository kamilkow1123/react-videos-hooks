import axios from 'axios';

const KEY = 'AIzaSyA0OA12K1txaiy2h7M5VPopCYtOXtGenO0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: KEY
    }
});