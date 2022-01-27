import React from "react";
import UserItem from "./UserItem";
import Card from "./Card";
import "./UserList.css";
const UserList = (props) => {
  return (
    <Card className='users'>
    <ul>
      {props.userDataList.map((data) => (
        <UserItem key={data.id} name={data.name} age={data.age} />
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
