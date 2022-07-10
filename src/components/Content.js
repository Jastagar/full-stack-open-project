import React from 'react'
import Parts from './Parts'

export default function Content(props) {
  return (
    <div>
       <Parts part={props.part1} exercises={props.exercises1}/>
       <Parts part={props.part2} exercises={props.exercises2}/>
       <Parts part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}
