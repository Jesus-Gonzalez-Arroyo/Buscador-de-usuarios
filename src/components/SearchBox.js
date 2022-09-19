import React from "react";
import './styles/style.css'

export default function Search({handlechange}){

    const handleChange = (e) =>{
        handlechange(e.target.value)
        console.log(e.target.value)
    }

    return(
        <div className="container-barra">
            <input placeholder="Buscar..." type='text' className="barra" onChange={(e) => handleChange(e)}/>
        </div>
    )
}