import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthenticationService } from "../../services/Authentication.service"
import toJSON from "../forms"

export function useLogin() {

    const {authenticated,setAuthenticated} = useContext(UserContext)

    const logout = () => {    
        setAuthenticated(false)
        AuthenticationService.logout()
    }

    const login = async (formData:FormData) => {
        const isAuthenticated = await AuthenticationService.login(toJSON(formData))
        setAuthenticated(isAuthenticated)
        if(isAuthenticated === false) { alert("Failed login attempt. Make sure username and password are correct") }
    }

    return {authenticated,login,logout}
}