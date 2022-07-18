import React, { useContext, createContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

function useAuth() {
  let AuthContext = createContext();
  return useContext(AuthContext);
}

export default RequireAuth;
