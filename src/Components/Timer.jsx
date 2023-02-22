import React, {useState, useEffect} from 'react'

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(()=> {
     const interval = setInterval(()=>{
         setTimer((counter)=> counter + 1)
     }, 5000);
     return () => clearInterval(interval);
  }, [])

  console.log(timer)

  return (
    <>
       <div style={{height : "400px"}}>
           <h2>Timer</h2>
            <p>Counter :  {timer}</p>
       </div>
    </>

  )
}

export default Timer