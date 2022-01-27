import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Modal from "./Modal";
import './UserInput.css';
const UserInput=(props)=>{
    
    const okHandler=()=>{
        setErrorMsg(null);

    }
    //state variable to store username
    const [userName,setUserName]=useState('');

    //state variable to store age
    const [age,setAge]=useState('');

    const [errorMsg,setErrorMsg]=useState(null);
    
    const userDataChangeHandler=(event)=>{
      setUserName(event.target.value);  
    }

    const ageDataChangeHandler=(event)=>{
        setAge(event.target.value);
    }

    const userDataSubmitHandler=(event)=>{
        event.preventDefault();

        if(userName.trim().length===0 || age.trim().length===0)
        {
            setErrorMsg({title:'Invalid Input',message:'Please enter valid usename/age (Non-empty)'});
            setAge('');
            setUserName('');
            return;

        }

       if(+age<1)
       {
        setErrorMsg({title:'Invalid Input',message:'Please enter valid age (Greater than 0)'});
        setAge('');
        setUserName('');
        return;
        
       }
        const UserData={
            id:Math.random().toString(),
            name:userName,
            age:age
        }

        props.onDataAddition(UserData);

        setAge('');
        setUserName('');
    }

   
        return(
            <form onSubmit={userDataSubmitHandler}>
            <Card className="input">
             {errorMsg && <Modal title={errorMsg.title} msg={errorMsg.message} onAction={okHandler}></Modal>}
                <label>User Name</label>
               
               
                <input type='text' value={userName} onChange={userDataChangeHandler} />
         
             
         
         
                <label>Age</label>
               
               
                <input type='number' value={age} onChange={ageDataChangeHandler} />
         
               
         
              
          <Button type='submit'>Add</Button>
              
                  
                </Card>
         
                </form>
        )
    
        }

export default UserInput;