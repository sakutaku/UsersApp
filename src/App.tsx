import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/UserForm/UserForm";
import {IUser} from "./types";
import Users from "./components/Users/Users";

const App = () => {
    const [users, setUser] = useState<IUser[]>([]);

    const addItem = (newUser: IUser) => {
        setUser(prevState => [...prevState, newUser]);
    };

  return (
    <div className="container">
        <div className="row">
            <div className="mt-5 col-12">
                <UserForm onSubmit={addItem}/>
            </div>
            <div className="col-12">
                <Users users={users}/>
            </div>
        </div>
    </div>
  );
};

export default App;
