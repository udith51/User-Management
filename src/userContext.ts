import { createContext, useState } from "react";
import { User } from "./modelTypes";

export interface UserManagementContextType {
    editUser?: User;
    users: User[];
    addUser: (user: User) => void;
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
    setEditUser: (id: string) => void;
}

export const useUserManagement = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editUser, setEditUser] = useState<User>();

    const addUser = (user: User) => {
        setUsers([...users, user]);
    }

    const deleteUser = (id: string) => {
        setUsers((users) => {
            return (users.filter(user => {
                return (user.id !== id)
            }))
        })
    }
    const updateUser = (updUser: User) => {
        setUsers(users.map(user => {
            if (user.id === updUser.id)
                return updUser;
            return user;
        }))
    }
    const setEditUserById = (id: string) => {
        setEditUser(users.find(user => {
            return (user.id === id);
        }))
    }

    return {
        editUser,
        setEditUser: setEditUserById,
        users,
        addUser,
        deleteUser,
        updateUser
    }
}


export const UserContext = createContext<UserManagementContextType>({
    users: [],
    addUser: (user: User) => { },
    deleteUser: (id: string) => { },
    updateUser: (updUser: User) => { },
    setEditUser: (id: string) => { }
})
