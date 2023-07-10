import React from "react";
import Theme from "./components/Theme.jsx";
import AppContainer from "./components/AppContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import TasksManager from "./views/TasksManager.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Error404 from "./views/Error404.jsx";

const App = () => {
  return (
    <Theme>
      <AuthContext>
        <AppContainer>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <TasksManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute needsAuth={false}>
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedRoute needsAuth={false}>
                    <Signup />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasksmanager"
                element={
                  <ProtectedRoute>
                    <TasksManager />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Error404 />}/>
            </Routes>
          </BrowserRouter>
        </AppContainer>
      </AuthContext>
    </Theme>
  );
};

export default App;
