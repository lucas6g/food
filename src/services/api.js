import axios from 'axios'

export default axios.create({

    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer cbD46TX1neRjgF14Uz502fxvH5FGWuWhEkyT-aGLimM6kZ9vg201CwIkLjThgnmFP_izcRsrjuIwZMex50t8cqLGRU9fn_JqKxc_9NYfyXCkbPjaHzJGlYxGMxC_XnYx'   
    },
    
})


