import axios from 'axios';

const KEY = 'AIzaSyAqwA4O_fmm8ThUT9k6sXwA-X-B6DsPf1g';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key : KEY
    }

})
