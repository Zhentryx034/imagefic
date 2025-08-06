const API_BASE_URL = "https://backend-imagfic.onrender.com"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export async function  createUser (username:string, email:string,phone_number:number,password:string,confirm_password:string)   {
    try{
        const res = await fetch (`${API_BASE_URL}/api/v1/register/`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,email,phone_number,password,confirm_password})
        })
       
        const data = await res.json();
        if(!res.ok) throw new Error(data.message || "Registration failed")
            return data
 toast.success('Registration Sucessful')
    }catch(err:unknown){
        let errorMsg = "Registration failed, something went wrong"
        if(err instanceof Error && err.message){
            errorMsg = err.message
        }
        toast.error(errorMsg)
        // console.log("Register Error",err)
        throw err
    }
}

export async function loginUser (email:string, password:string) {
    try{
        const payload = { email, password }
        // console.log("Sending payload to Login API 🚀:", payload)    
        const res = await fetch (`${API_BASE_URL}/api/v1/login/`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })

        // const data = await res.json()
        const text = await res.text()
        // console.log("Login status:",res.status)
        // console.log('Raw Response:', text)
        let data;

        try{
            data = JSON.parse(text)
        }catch(jsonErr){
            console.warn("Response is not valid JSON", jsonErr)
            data = { message: text}
        }

        if(!res.ok) throw new Error(data.message || "Login Failed")

            //this logic save the user login token in local storage
        // localStorage.setItem('authToken', data.token)
        // alert("Login successful")
        toast.success('Login Successful')
        return data

    }catch(err:unknown){
        
        let errorMsg = "Login failed, something went wrong"
        // if(err instanceof Error && err.message){
        //    err.message
        // }
        // toast.error(errorMsg)
        // alert("Login failed, something went wrong")
        // console.log("Login Error", err)
        if(err instanceof Error && err.message){
            errorMsg = err.message
        }
        console.log("Login Error", errorMsg)
        throw err
    }
 
}

export async function logOutUser(){
 try{
    const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
    if(!token) {
      console.warn("No token found, but proceeding with local logout")
    } else {
      try {
        // Try to call the backend logout endpoint, but don't block local logout if it fails
        await fetch(`${API_BASE_URL}/api/v1/logout/`, {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`
          },
        })
        // We don't check res.ok here - we'll proceed with local logout regardless
      } catch (apiError) {
        console.warn("API logout failed, but proceeding with local logout", apiError)
      }
    }
    
    // Always clear tokens from both storage locations, even if API call failed
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    sessionStorage.removeItem("access_token")
    sessionStorage.removeItem("refresh_token")
    return true
 }
 catch (err:unknown){
     console.error("Logout error", err)
     // Still clear tokens even if there was an error
     localStorage.removeItem("access_token")
     localStorage.removeItem("refresh_token")
     sessionStorage.removeItem("access_token")
     sessionStorage.removeItem("refresh_token")
     // Don't throw the error - return true to indicate local logout was successful
     return true
 }
}