import { useState } from "react";
import { createContext } from "react";

export const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => { },
    userToken: null,
    setUserToken: () => { },
})

export default function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, setUserToken] = useState(null)

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    )
}