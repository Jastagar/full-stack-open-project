import React,{useState} from 'react'

function ButtonC({handleClick,text}){
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

export default function Anecdotes() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
      ]
       
      const [selected, setSelected] = useState(0)
      var defaultPoints = new Uint8Array(10); 
      const [points,setPoints] = useState(defaultPoints)

      function nextAnecdote(){
        let randomAnecdote= Math.round(Math.random()*anecdotes.length)
        while(randomAnecdote==selected || randomAnecdote>=anecdotes.length){
            randomAnecdote=Math.round(Math.random()*anecdotes.length)
        }
        setSelected(randomAnecdote)
      }
      function incPoint(){
        const newPoints= [...points]
        newPoints[selected]+=1
        setPoints(newPoints)
      }
      function topAnecdotes(){
        const topAnecdote = points.indexOf(Math.max(...points))
        return topAnecdote
      }
      
      return (
        <div>
        <h1>Anecdotes of the Day</h1>
          {anecdotes[selected]}<br></br>
          this anecdote has {points[selected]} votes<br></br>
          <ButtonC handleClick={nextAnecdote} text={"Next anecdote"}/>
          <ButtonC handleClick={incPoint} text={"Vote"}/>
        <h1>Anecdotes with most votes</h1>
          {anecdotes[topAnecdotes()]}
        </div>
      )
}
