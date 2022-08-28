import React, { useEffect, useRef, useState } from 'react'
import { authToken, postLogin, getBlogs } from '../utils/server'
import BlogsCreateForm from './BlogsCreateForm'
import BlogsShowcase from './BlogsShowcase'
import LoginForm from './LoginForm'
import Toggleable from './Toggleable'

export default function BlogForm({ setMessage }) {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState(null)
    const [blogs,setBlogs] = useState([])
    const blogFormRef = useRef()


    useEffect(() => {
        async function getData(){
            const data = await getBlogs()
            setBlogs(data)
            return data
        }
        if(user){
            getData()
        }
    },[user])
    useEffect(() => {
        const storedUser = window.localStorage.getItem('loggedInUser')
        if(storedUser){
            const parsedDtoredUser = JSON.parse(storedUser)
            authToken(parsedDtoredUser.token)
            setUser(parsedDtoredUser)
        }
    },[])

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const user = await postLogin({
                username, password,
            })
            setUser(user)
            authToken(user.token)
            setUsername('')
            setPassword('')
            window.localStorage.setItem('loggedInUser', JSON.stringify(user))
        } catch (exception) {
            setUsername('')
            setPassword('')
            setUser(null)
            setMessage([1,'Your username or password is incorrect'])
        }
    }
    function handleLogout(){
        window.localStorage.removeItem('loggedInUser')
        setUser(null)
    }

    const loggedIn = () => (
        <div className='col-md-10 text-center'>
            <h1 className='display-3 text-success'>{user.name} just logged in</h1>
            <button className='btn btn-warning' onClick={handleLogout}>logout</button>
            <Toggleable ref={blogFormRef} buttonLable='Add a Blog' >
                <BlogsCreateForm user={user} blogRef={blogFormRef} changeBlogs={setBlogs}/>
            </Toggleable>
            <BlogsShowcase blogs={blogs} changeBlogs={setBlogs} />
        </div>
    )
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {
                    user===null
                        ?<Toggleable buttonLable='Login'>
                            <LoginForm
                                username={username}
                                password={password}
                                handleUsernameChange={handleUsernameChange}
                                handlePasswordChange={handlePasswordChange}
                                handleSubmit={handleSubmit}
                            />
                        </Toggleable>
                        :loggedIn()
                }
            </div>
        </div>
    )
}
