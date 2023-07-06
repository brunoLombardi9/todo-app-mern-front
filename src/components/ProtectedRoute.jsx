import React, { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, needsAuth = true }) => {
  const { auth, user } = useContext(authContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (needsAuth) {
      !auth && navigate("/login");
    } else {
      auth && navigate("/tasksmanager");
    }
  }, [auth, user]);

  return <>{children}</>;
};

export default ProtectedRoute;
