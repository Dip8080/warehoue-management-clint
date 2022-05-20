import { useEffect, useState } from "react";

const UseServices = ()=>{
    const [fruits , setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return [fruits]
}

export default UseServices