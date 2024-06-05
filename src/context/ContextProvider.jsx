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
    const [userToken, _setUserToken] = useState(localStorage.getItem("TOKEN"))

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token)
        } else {
            localStorage.removeItem("token")
        }

        _setUserToken(token)
    }

    return (
        <StateContext.Provider value={{ currentUser, setCurrentUser, userToken, setUserToken }}>
            {children}
        </StateContext.Provider>
    )
}