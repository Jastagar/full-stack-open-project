import React from 'react'
import { deleteABlog, getBlogs, updateLikes } from '../utils/server'
import Toggleable from './Toggleable'

export default function BlogsShowcase({ blogs, changeBlogs }) {
    async function handleDelete(event){
        const toDelete = blogs[event.target.value].id
        await deleteABlog(toDelete)
        const newBlogs = await getBlogs()
        changeBlogs(newBlogs)
    }
    async function handleLike(event){
        const tolike = blogs[event.target.value]
        tolike.likes++
        tolike.user = tolike.user[0].id
        await updateLikes(tolike)
        const newBlogs = await getBlogs()
        changeBlogs(newBlogs)
    }
    return (
        <div className='text-center'>
            {blogs.map((eachBlog,index) => {
                return (
                    <div key={`blogKey${index}`} className='border border-3 shadow rounded py-3 my-3'>
                        <h1>{eachBlog.title}</h1>
                        <Toggleable buttonLable='view'>
                            <p>{eachBlog.content}</p>
                            <h3>{eachBlog.author}</h3>
                            <h4>likes {eachBlog.likes}</h4>
                            <button value={index} onClick={handleLike} className='btn btn-success'>like</button>
                            <div>
                                <a href={eachBlog.url} target='blank'>Link to Article</a>
                            </div>
                            <button value={index} onClick={handleDelete} className='btn btn-danger'>Delete</button>
                        </Toggleable>
                    </div>
                )
            })}
        </div>
    )
}
