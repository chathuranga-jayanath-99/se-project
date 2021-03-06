import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ResetPassword from "./components/auth/resetpassword/ResetPassword";
import NoPage from "./components/nopage/NoPage";
import Welcome from "./components/welcome/Welcome";
import PasswordManager from "./components/passwordmanager/PasswordManager";
import Dashboard from "./components/dashboard/dashboard";
import { AddPasswordWithRouter } from "./components/addPassword/addPassword";
import { AddImageWithRouter } from "./components/addimage/addimage";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import Logout from "./components/auth/Logout";
import ImageManager from "./components/imagemanager/imagemanager";
import AddImage from "./components/addimage/addimage";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route
            path="passwordmanager"
            element={
              <ProtectedRoute user={user}>
                <PasswordManager user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-password"
            element={
              <ProtectedRoute user={user}>
                <AddPasswordWithRouter user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="imagemanager"
            element={
              <ProtectedRoute user={user}>
                <ImageManager user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="addimage"
            element={
              <ProtectedRoute user={user}>
                <AddImageWithRouter user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
