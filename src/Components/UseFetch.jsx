import { useEffect, useState } from "react"
import axios from 'axios'

const UseFetch = (url) => {
    const [data,setdata] = useState([])
    const [load,setload] = useState(false)
    useEffect(()=>{
        try{
        setload(true)
        axios.get(url)
        .then(Response => setdata(Response.data))
        }
        catch(err){
            console.log(err)
        }
        finally{
            setload(false)
        }
    },[url])
    return [data,load]
}

export default UseFetch
