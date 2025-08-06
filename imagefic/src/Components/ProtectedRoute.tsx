import { Navigate, Outlet } from "react-router-dom"
import React from "react"

const isAuthenticated = () => {
    const token = localStorage.getItem("access_token")
    return !!token || !!sessionStorage.getItem("access_token")
}

const ProtectedRoute:React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute