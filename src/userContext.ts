import { createContext, useContext } from "react";
import { userForm } from "./modelTypes";

interface UserContextType {
    allUsers: {
        editingUser: userForm,
        addedUsers: userForm[]
    },
    setAllUsers: (prev: UserContextType['allUsers']) => void
}

export const UserContext = createContext<UserContextType>({
    allUsers: {
        editingUser: {
            name: "",
            age: 0,
            gender: "",
            id: "",
            description: ""
        },
        addedUsers: []
    },
    setAllUsers: () => { }
})

// export const useUserContext = useContext(UserContext);