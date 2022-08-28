import React, { useState } from 'react'
import { getBlogs, postNewBlog } from '../utils/server'

export default function BlogsCreateForm({ user, blogRef, changeBlogs }) {

    const [title,setTitle]= useState('')
    const [url,setUrl]= useState('')
    const [author,setAuthor]= useState('')

    async function handleCreateNewForm(event){
        blogRef.current.toggleVisibility()
        event.preventDefault()
        const object = { title,author,url,userId:user.id }
        await postNewBlog(object)
        const { data } = await getBlogs()
        changeBlogs(data)
    }
    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleCreateNewForm} className='d-flex flex-column align-items-center' >
                <input value={title} onChange={(event) => {setTitle(event.target.value)}} className='my-3' name='title' placeholder='Title' required></input>
                <input value={author} onChange={(event) => {setAuthor(event.target.value)}} className='my-3' name='author' placeholder='Author' required></input>
                <input value={url} onChange={(event) => {setUrl(event.target.value)}} className='my-3' name='url' placeholder='Url' required></input>
                <button className='btn btn-primary my-3' type='sumbit'>Create</button>
            </form>
        </div>
    )
}
