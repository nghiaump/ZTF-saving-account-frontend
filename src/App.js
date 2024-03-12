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
import React from "react";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" exact element={<MainLayout body={<></>} />} />
          <Route
            path="/account-list"
            element={<MainLayout body={<AccountPage />} />}
          />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
