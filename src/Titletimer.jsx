import { useState,useEffect} from "react";


function Titletimer(){
    const [count,setCount]=useState(0);
    const[isruning,setIsruning]=useState(true);

    useEffect(()=>{
        if (!isruning)return;
const interval=setInterval(() => {
    setCount(prev=>prev+1);
}, 1000);

return()=>clearInterval(interval);
    },[isruning]);
       
    useEffect(()=>{
     document.title=`ثواني :${count}`;
    },[count]);

const changerun=()=>{
    setIsruning(prev=>!prev);
}

    return(
        <div>
            <h1>مر {count} ثانية  </h1>
        <button onClick={changerun}>{isruning?'تم التشغيل':'تم الايقاف'}</button>
        </div>
    );
}


export default Titletimer