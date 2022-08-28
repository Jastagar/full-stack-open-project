import axios from 'axios'
const baseUrl = '/api/'

let token = null

const authToken = newToken => {
    token = 'bearer ' + newToken
}

async function getBlogs(){
    const config = { headers : { authorization: token } }
    const gotBlogs = await axios.get(baseUrl + 'blogs' , config)
    const { data } = gotBlogs
    data.sort((a,b) => {
        return b.likes - a.likes
    })
    return data
}

async function postNewBlog(object){
    const config = { headers :{ authorization: token } }
    return await axios.post(baseUrl + 'blogs', object, config)
}

async function postLogin(object){
    const config = { headers : { authorization: token } }
    try {
        const response = await axios.post('/login', object, config)
        return response.data
    } catch (error) {
        console.error('Wrong credentials')
    }
}

async function deleteABlog(id){
    const config = { headers : { authorization: token } }
    return await axios.delete(baseUrl+'/blogs/'+id, config)
}

async function updateLikes(updatedObject){
    const config =  { headers: { authorization:token } }
    return await axios.put(baseUrl+'blogs/'+updatedObject.id,updatedObject,config)
}

export { postLogin, authToken, getBlogs, postNewBlog, deleteABlog, updateLikes }