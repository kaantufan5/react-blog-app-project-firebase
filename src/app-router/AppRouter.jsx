import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Details from "../pages/Details";
import Undefined from "../pages/Undefined";

const AppRouter = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <StyledEngineProvider injectFirst>
              <CssVarsProvider>
                <Dashboard />
              </CssVarsProvider>
            </StyledEngineProvider>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/undefined" element={<Undefined />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
