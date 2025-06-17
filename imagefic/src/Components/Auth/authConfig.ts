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

export default function loginUser () {

}

export default function logOutUser(){

}