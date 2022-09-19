import React, {useState, useEffect} from "react";
import Search from "./SearchBox";
import Notfound from "./NotFound";
import './styles/style.css'


export default function UserInfo(){

    const [Users, SetUsers] = useState([])
    const [Filtro, SetFiltro] = useState([])

    useEffect(()=>{
        async function Callapi(){
            let url_api = await fetch('https://randomuser.me/api/?results=12')
            let response = await url_api.json()
            SetUsers(response.results)
            SetFiltro(response.results)
        }
        Callapi()
    }, [])

    const Search_users = (busqueda) =>{
        let search =  Users.filter((user)=>(user.name.first).includes(busqueda))
        SetFiltro(search)
    }

    return(
        <div className="users">
            <Search handlechange={Search_users}/>
            {
                Filtro.length === 0 ? <Notfound/> :
                
                Filtro.map((info)=>{
                    return(
                        <h4>{info.name.first}</h4>
                    )
                })
            }
        </div>
    )
}