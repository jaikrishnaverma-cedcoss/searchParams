import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MyContext } from "../myContext"
import { useWrappedContext } from "./useMyContext"

// custom hook to check authenticated or not if not then redirect to login
const Authenticate = () => {
    const navigate=useNavigate()
    const {state} = useWrappedContext(MyContext)
    useEffect(()=>{
        if(Object.keys(state.session).length===0)
        navigate('/login')
      },[state])
  }
  export default Authenticate