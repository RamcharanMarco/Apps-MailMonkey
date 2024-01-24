import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Console from "../pages/Console";

import MainLayout from "../components/Layouts/MainLayout";
import UserLayout from "../components/Layouts/UserLayout";
import Camp from "../pages/Camp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>

        {/* user layout */}
        <Route path="/console/:id/" element={<UserLayout />}>
          <Route index element={<Console />}></Route>
          <Route path="camp/:id" element={<Camp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
