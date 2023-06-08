import React from 'react';
import {IUser} from "../../types";

interface Props {
    user: IUser;
}
const UserItem: React.FC<Props> = ({user}) => {
    let status: string;

    if(user.isCompleted === false) {
        status = 'non-active';
    } else {
        status = 'active';
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title text-uppercase">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <blockquote className="blockquote mb-0">
                    <p>Status: {status}</p>
                    <footer className="blockquote-footer">Type of User <cite title="Source Title">{user.type}</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    );
};

export default UserItem;