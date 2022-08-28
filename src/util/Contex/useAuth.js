import { useContext } from "react";
import AuthContext from "./AuthProvide";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;