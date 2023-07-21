import React, { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    const history = useHistory();
    
    const [loggedin, setLoggedin] = useState(currentUser !== null);

    const logout = () => {
        sessionStorage.removeItem("currentUser");
        setLoggedin(false);
        history.push("/login");
    }

    return (
        <UserContext.Provider value={{loggedin, setLoggedin, logout}}>{children}</UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);