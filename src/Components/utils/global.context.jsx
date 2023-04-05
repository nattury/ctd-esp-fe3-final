import { createContext,useContext,useReducer,useEffect,useState } from "react";
import { apiSwitch } from "../../apiSwitch";
import axios from "axios";
export const initialState = {
  dark: false,
  }

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {

  const [data,setData]=useState([]);
  const [user,setUser]=useState(false)
  const [state,dispatch]=useReducer(apiSwitch,initialState)


  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>setData(res.data))
  },[])



  return (
    <ContextGlobal.Provider
    value={{data,state:state,dispatch:dispatch}}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () =>{
  return useContext(ContextGlobal)
}
