import axios from 'axios'

const instance=axios.create({
    baseURL: 'https://tinder-clone-ak.herokuapp.com/',
})

export default instance;