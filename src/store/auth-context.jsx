import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    emailId: "",
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
    logedInEmail: (email) => { }
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token")
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState("")
    const userIsLoggedIn = !!token;

    const logedInEmailUserHandlar = (emailId) => {
        setEmail(emailId)
    }

    const loginHandlar = (token) => {
        setToken(token)
        // set user loged in for 2 minutes
        localStorage.setItem("token", token)
        setTimeout(() => {
            localStorage.removeItem('token')
        }, 2000)
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
        logedInEmail: logedInEmailUserHandlar,
        emailId: email,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;