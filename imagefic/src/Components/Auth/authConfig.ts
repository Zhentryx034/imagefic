const API_BASE_URL = "https://backend-imagfic.onrender.com"


export async function  createUser (username:string, email:string,phone_number:number,password:string,confirm_password:string)   {
    try{
        const res = await fetch (`${API_BASE_URL}/register`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,email,phone_number,password,confirm_password})
        })

        const data = await res.json();
        if(!res.ok) throw new Error(data.message || "Registration failed")
            return data

    }catch(err:unknown){
        console.log("Register Error",err)
        throw err
    }
}

export async function loginUser (email:string, password:string) {
    try{
        const res = await fetch(`${API_BASE_URL}/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        })

        const data = await res.json()
        if(!res.ok) throw new Error(data.message || "Login Failed")

            //this logic save the user login token in local storage
        localStorage.setItem('authToken', data.token)
        return data

    }catch(err:unknown){
        console.log("Login Error", err)
        throw err
    }
 
}

export async function logOutUser(){
 try{
    const token = localStorage.getItem('authToken')
    if(!token) throw new Error("No token found")

    const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    if(!res.ok) throw new Error ('Logout Failed')
        localStorage.removeItem("authToken")
    return true
 }
 catch (err:unknown){
     console.error("Logout error", err)
     throw err
 }
}