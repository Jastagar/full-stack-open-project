import axios from 'axios'

const baseUrl = ''

async function postLogin(object){
    console.log(object)
    const response = await axios.post(baseUrl + '/login', object)
    return response.data
}

export { postLogin }