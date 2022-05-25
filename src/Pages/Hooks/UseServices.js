import { useEffect, useState } from "react";

const UseServices = ()=>{
    const [fruits , setFruits] = useState([]);
    useEffect(()=>{
        fetch('https://lit-anchorage-35941.herokuapp.com/fruits')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return [fruits,setFruits]
}

export default UseServices