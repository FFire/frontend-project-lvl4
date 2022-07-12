import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { LoginPage } from "../pages/LoginPage.jsx";
import { MainPage } from "../pages/MainPage.jsx";
import { SignupPage } from "../pages/SignupPage.jsx";
import { NavMenu } from "./NavMenu.jsx";
import { Toast } from "./Toast.jsx";

export const App = () => (
  <>
    <NavMenu />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Toast />
  </>
);
