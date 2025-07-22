// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  login: (access: string, refresh: string, remember: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const access = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
    const refresh = localStorage.getItem("refresh_token") || sessionStorage.getItem("refresh_token");
    if (access && refresh) {
      setAccessToken(access);
      setRefreshToken(refresh);
    }
  }, []);

  const login = (access: string, refresh: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
    } else {
      sessionStorage.setItem("access_token", access);
      sessionStorage.setItem("refresh_token", refresh);
    }
    setAccessToken(access);
    setRefreshToken(refresh);
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setAccessToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
