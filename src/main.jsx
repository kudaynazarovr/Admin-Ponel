import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout.jsx";
import { LayoutContent } from "./components/content/LayoutContent.jsx";
import { Profile } from "./Profile.jsx";
import { Analytics } from "./Analytics.jsx";
import { Management } from "./Management.jsx";
import { Tables } from "./Tables.jsx";
import Form from "./FormPage.jsx";
import { UIElements } from "./UIElements.jsx";
import { CalendarPage } from "./CalendarPage.jsx";
import { SettingsPage } from "./SettingsPage.jsx";
import { Login } from "./Login.jsx";
import { Signup } from "./signup.jsx";
import { Product } from "./Product.jsx";
import { Transactions } from "./Transactions.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LayoutContent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="management" element={<Management />} />
          <Route path="tables" element={<Tables />} />
          <Route path="form" element={<Form />} />
          <Route path="uielements" element={<UIElements />} />
          <Route path="calendarpage" element={<CalendarPage />} />
          <Route path="settingspage" element={<SettingsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
