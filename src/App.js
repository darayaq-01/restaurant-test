import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login";

import Admin from "./admin/Dashboard";
import Users from "./admin/Users";
// import RequireAuth from "./admin/RequiereAuth";

function App() {
  return (
    <>
      <Navbar fixed />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Login />} />
        <Route path='/auth/admin' element={<Admin />} />
        <Route path='/auth/users' element={<Users />} />

        {/* 
        <Route
          path='/protected'
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route
          path='/protected'
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
            */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
