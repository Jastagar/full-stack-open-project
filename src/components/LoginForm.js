import PropTypes from 'prop-types'

function LoginForm({ handleSubmit, handleUsernameChange, handlePasswordChange, username, password }){
    return (
        <div className="col-md-4">
            <form onSubmit={handleSubmit} className='flex-column form my-2'>
                <input className='my-4 form-control' name='username' onChange={handleUsernameChange}   type='text'   placeholder='Username' required value={username}></input>
                <input className='my-4 form-control' name='password' onChange={handlePasswordChange} type='password' placeholder='Password' required value={password}></input>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
        </div>
    )
}
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
export default LoginForm