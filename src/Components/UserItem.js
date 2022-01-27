import React from "react";
import "./UserItem.css"

const UserItem=(props)=>{
    return(
        <li class="userInfo">
          {props.name} ({props.age} years old !)
        </li>
    )
}

export default UserItem;