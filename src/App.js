import React, { useState } from "react";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList";

const App = () => {
  const [dynamicDataList, setDynamicDataList] = useState([]);
  const dataAdditionHandler = (newData) => {
    setDynamicDataList((oldDataList) => [...oldDataList, newData]);
  };
  return (
    <div>
      <UserInput onDataAddition={dataAdditionHandler} />
      <UserList userDataList={dynamicDataList} />
    </div>
  );
};

export default App;
