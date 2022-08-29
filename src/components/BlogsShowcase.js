import React from 'react'
import BlogIndivisual from './BlogIndivisual'

export default function BlogsShowcase({ blogs, changeBlogs }) {
    return (
        <div className='text-center'>
            {blogs.map((eachBlog,index) => {
                return (
                    <BlogIndivisual
                        key={index}
                        index={index}
                        changeBlogs={changeBlogs}
                        eachBlog={eachBlog}
                        blogs={blogs}
                    />
                )
            })}
        </div>
    )
}
