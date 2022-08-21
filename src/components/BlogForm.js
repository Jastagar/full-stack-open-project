import React, { useEffect, useState} from 'react'
import { postLogin } from '../utils/server';

export default function BlogForm() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [user,setUser] = useState(null)

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    useEffect(() => {

    },[])

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const user = await postLogin({
              username, password,
            })
            setUser(user)
            setUsername('')
            setPassword('')
          } catch (exception) {
            console.error('Wrong credentials')
            setUser(user)
            setUsername('')
            setPassword('')
          }
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='w-50 d-flex flex-column'>
            <input name='username' onChange={handleUsernameChange} type='text' placeholder='Username' required value={username}></input>
            <input name='password' onChange={handlePasswordChange} type='password' placeholder='Password' required value={password}></input>
            <button className='btn btn-primary' type='submit'>Login</button>
        </form>
    </div>
  )
}
