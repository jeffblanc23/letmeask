import { createContext, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export useAuth(){
    return useContext(AuthContext);
}