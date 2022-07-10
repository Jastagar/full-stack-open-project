import React, { useState } from 'react'

function History(props){
    if(props.allClicks.length===0){
        return(
            <div>
                <h2>Use the buttons to have some History</h2>
            </div>
        )
    }else{
        return(
            <div>
                <h2>{props.allClicks.join("")}</h2>
            </div>
        )
    }
}

function ButtonT({handleClick,text}) {
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

export default function ComplexUseState() {

    const [clicks,setClicks]= useState({leftCount:0,rightCount:0,allClicks:[]})


    function handleLeftClick(){
        setClicks({...clicks,leftCount:clicks.leftCount+1,allClicks:clicks.allClicks.concat('L')})
    }
    function handleRightClick(){
        setClicks({...clicks,rightCount:clicks.rightCount+1,allClicks:clicks.allClicks.concat('R')})
    }

  return (
    <div>
        <History allClicks={clicks.allClicks} />
        <ButtonT handleClick={handleLeftClick} text={clicks.leftCount} />
        <ButtonT handleClick={handleRightClick} text={clicks.rightCount} />
    </div>
  )
}
