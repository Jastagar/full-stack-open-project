import { useState } from 'react'

function Button({handleClick,text}){
    
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

function StatisticLine({text,value}){
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Statistics({reviews,stats}){
  if(stats[0]){
    return(
      <div>
      <h1>Statistics</h1>
      <table>
      <tbody>
        <StatisticLine text={"good"} value={reviews.good} />
        <StatisticLine text={"neutral"} value={reviews.neutral} />
        <StatisticLine text={"bad"} value={reviews.bad} />
        <StatisticLine text={"all"} value={stats[0]} />
        <StatisticLine text={"average"} value={stats[1]} />
        <StatisticLine text={"positive"} value={stats[2]+"%"} />
      </tbody>  
      </table>
    </div>
    )
  }else{
    return(
      <div>
        <h1>No feedback Given</h1>
      </div>
    )
  }
}

const AppU = () => {

  const [reviews,setReviews] = useState({good:0,neutral:0,bad:0})

    function handleGood(){
        setReviews({...reviews,good:reviews.good+1})
    }
    function handleNeutral(){
        setReviews({...reviews,neutral:reviews.neutral+1})
    }
    function handleBad(){
        setReviews({...reviews,bad:reviews.bad+1})
    }
    const all = reviews.good+reviews.neutral+reviews.bad
    const avg = (reviews.good-reviews.bad)/all
    const positive = reviews.good/all*100

    const stats=[all,avg,positive]
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <br></br>
      <Statistics reviews={reviews} stats={stats}/>
    </div>
  )
}

export default AppU