import React from 'react';
import {IUser} from "../../types";
import UserItem from "./UserItem";

interface Props {
    users: IUser[];
}

const Users: React.FC<Props> = ({users}) => {
    return (
        <>
            <h4 className="text-center mt-5 text-uppercase text-white">Users:</h4>
            {users.map((user: IUser) => {
                return <UserItem key={user.id} user={user}/>
            })}
        </>
    );
};

export default Users;