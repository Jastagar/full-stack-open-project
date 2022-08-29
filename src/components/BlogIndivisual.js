import { deleteABlog, getBlogs, updateLikes } from '../utils/server'
import Toggleable from './Toggleable'
import PropTypes from 'prop-types'

function BlogIndivisual({ eachBlog, index, blogs, changeBlogs }) {
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
        <div className='border border-3 shadow rounded py-3 my-3'>
            <h1>{eachBlog.title}</h1>
            <Toggleable buttonLable='view'>
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
}

BlogIndivisual.propTypes = {
    eachBlog: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    blogs: PropTypes.array.isRequired,
    changeBlogs: PropTypes.func.isRequired
}

export default BlogIndivisual
