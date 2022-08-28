import React, { useState } from 'react'
import BlogForm from './BlogForm'
import BlogsAes from './BlogsAes'
import Notifications from './Notifications'

export default function BlogsMain() {
    const [message,setMessage]=useState('')
    return (
        <>
            <Notifications incomingMessage={message} setMessage={setMessage} />
            <BlogsAes />
            <BlogForm setMessage={setMessage} />
        </>
    )
}
