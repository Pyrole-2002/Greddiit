import axios from "axios"

const API_URL = "/auth/register"

// Register User
const register = async (userData) => {
    console.log(1)
    const response = await axios.post(API_URL, userData)
    console.log(2)
    
    if (response.data) {
        console.log(3)
        localStorage.setItem("user", JSON.stringify(response.data))
        console.log(4)
    }
    
    return response.data
}

const authService = {
    register,
}

export default authService