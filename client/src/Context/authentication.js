import {createContext, useState} from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
  
    return < AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser}}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}