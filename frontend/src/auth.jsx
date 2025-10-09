import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const VALID_USERS = [
  { username: "student", password: "1234" },
  { username: "ananya", password: "stem" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
    const ok = VALID_USERS.some(
      (u) => u.username === username && u.password === password
    );
    if (ok) setUser({ username });
    return ok;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
