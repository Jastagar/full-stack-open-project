import React, { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

const Toggleable = forwardRef((props, refs) => {
    const [visible,setVisible] = useState(false)

    const handleLoginVisible = { display: `${visible? 'none':''}` }
    const handleFormVisible = { display: `${visible? '':'none'}` }

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility:() => {setVisible(!visible)}
        }
    })
    return (
        <div className='my-2'>
            <button style={handleLoginVisible} className='btn btn-primary' onClick={() => {setVisible(!visible)}}>{props.buttonLable}</button>
            <div style={handleFormVisible}>
                {props.children}
                <button className='btn btn-danger my-3' onClick={() => {setVisible(!visible)}} type='reset'>Cancel</button>
            </div>
        </div>
    )
})

Toggleable.displayName = 'Togglable'

Toggleable.propTypes = {
    buttonLable: PropTypes.string.isRequired
}

export default Toggleable