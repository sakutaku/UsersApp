import React, {useState} from 'react';
import {IUser, IUserMutation} from "../../types";
import {nanoid} from "nanoid";

interface Props {
    onSubmit: (newUser: IUser) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        type: '',
        isCompleted: false,
    });

    const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: nanoid(),
            ...user,
        });

        console.log(user);
    };

    return (
        <form className="form-control w-50" onSubmit={onFormSubmit}>
            <h4>Add info:</h4>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={onTextFieldChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={onTextFieldChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="isCompleted">Status</label>
                <input
                    type="checkbox"
                    name="isCompleted"
                    id="isCompleted"
                    checked={user.isCompleted}
                    onChange={(e) => setUser((prevState) => ({...prevState, isCompleted: e.target.checked}))}
                />
            </div>

            <div className="form-group mb-3">
                <select
                    name="type"
                    className="form-control"
                    value={user.type}
                    onChange={onTextFieldChange}
                >
                    <option value="" disabled defaultValue="">Select a type</option>
                    <option value="work">Work</option>
                    <option value="sport">Sport</option>
                    <option value="home">Home</option>
                </select>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-danger">Submit</button>
            </div>
        </form>
    );
};

export default UserForm;