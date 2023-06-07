import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import {IUser} from "./types";

const App = () => {
    const [user, setUser] = useState<IUser[]>([]);

    const addItem = (newUser: IUser) => {
        setUser(prevState => [...prevState, newUser])
    };

  return (
    <div className="mx-auto">
      <UserForm onSubmit={addItem}/>
    </div>
  );
};

export default App;
