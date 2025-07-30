import { useState,useEffect } from "react";

function Downtimer (){
const [count,setCount]=useState(10);
useEffect(()=>{
if(count == 0) return;

const timer=setInterval(() => {
    setCount(prev => prev-  1);
},1000);

return()=>clearInterval(timer);
},[count]);

 return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>العد التنازلي :{count}</h1>
           {count === 0 && <p>⏰ انتهى !. الوقت!</p>}
    </div>
 );
}
export default Downtimer;