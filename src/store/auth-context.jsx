import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
})


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token")
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandlar = (token) => {
        setToken(token)

        localStorage.setItem("token", token)
        setTimeout(() => {
            localStorage.removeItem('token')
        }, 250)
    }
    const logOutHandlar = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandlar,
        logout: logOutHandlar,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;