import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import AccountRegistrationPage from "./pages/AccountRegistrationPage";
import UserPage from "./pages/UserPage";
import WithdrawalPage from "./pages/WithdrawalPage";
import React from "react";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" exact element={<MainLayout body={<></>} />} />
          <Route
            path="/user-tool"
            element={<MainLayout body={<UserPage />} />}
          />
          <Route
            path="/account-register"
            element={<MainLayout body={<AccountRegistrationPage />} />}
          />
          <Route
            path="/account-list"
            element={<MainLayout body={<AccountPage />} />}
          />
          <Route
            path="/withdrawal"
            element={<MainLayout body={<WithdrawalPage />} />}
          />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
