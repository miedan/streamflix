import {React, createContext, useReducer, useEffect} from "react";
import Appreducer from "./Appreducer";

const initialstate = {
    watchlater : localStorage.getItem('watchlater') ? JSON.parse(localStorage.getItem('watchlater')):[],
    
    // watchlater: localStorage.getItem('watchlater') ? JSON.parse(localStorage.getItem('watchlater')) : [],
    
    
}

export const Globalcontext = createContext(initialstate);

export const Globalcontextprovider = (props) => {
    const [state, dispatch] = useReducer(Appreducer, initialstate)
    useEffect(() => {
        localStorage.setItem("watchlater", JSON.stringify(state.watchlater))
    }, [state])

    const addtowatchlater = (movie) => {
        console.log("clicked", movie.id)
        // console.log("watchlater", watchlater)
        dispatch({type:'ADDTOWATCHLATER',payload:movie});
    }

    const removefromwatchlater = (id) => {
        dispatch({type:'REMOVEFROMWATCHLATER', payload:id})
    }

    return(
        <Globalcontext.Provider value={{watchlater: state.watchlater, addtowatchlater, removefromwatchlater}}>
            {props.children}
        </Globalcontext.Provider>
    )
}