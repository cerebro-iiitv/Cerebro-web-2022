import { useContext } from "react";
import AuthContext from "../store/AuthContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
