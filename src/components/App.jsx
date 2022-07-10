import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage.jsx";
import { LoginPage } from "../pages/LoginPage.jsx";
import { MainPage } from "../pages/MainPage.jsx";

export const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);
