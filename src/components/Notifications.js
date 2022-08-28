import React, {useEffect, useState} from 'react'

export default function Notifications({incomingMessage, setMessage}) {
    const [notify,setNotify] = useState('')
    const [err,message] = incomingMessage
    useEffect(()=>{
        setNotify(message)
        if(message){
            setTimeout(() => {
                setMessage('')
            },3000)
        }
    },[notify, message, setMessage])

    var alert
        
    if(!err){
        alert = () => (
            <div className='border border-primary border-4 display-5 text-success p-3 rounded m-3'>
                { notify }
            </div>
        )
    }else{
        alert = () => (
            <div className='border border-danger border-4 display-5 text-danger p-3 rounded m-3'>
                { notify }
            </div>
        )
    }

  return (
    <>
        { notify? alert():''}
    </>
  )
}
