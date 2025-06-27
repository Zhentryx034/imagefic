import { Navigate, Outlet } from "react-router-dom"
import React from "react"

const isAuthenticated = () => {
    const token = localStorage.getItem("authToken")
    return !!token
}

const ProtectedRoute:React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute