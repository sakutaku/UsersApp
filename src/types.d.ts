export interface IUser {
    id: string;
    name: string;
    email: string;
    isCompleted: boolean;
    type: string;
}
export interface IUserMutation {
    name: string;
    email: string;
    type: string;
    isCompleted: boolean;
}