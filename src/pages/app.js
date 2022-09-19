import React from "react";
import Search from "../components/SearchBox";
import UserInfo from "../components/Users";

class App extends React.Component{
    render(){
        return(
            <div>
                <Search/>
                <UserInfo/>
            </div>
        )
    }
}

export default App