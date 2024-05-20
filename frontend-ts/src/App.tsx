import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./component/user/user-info";
import Landing from "./component/landing/landing";
import Login from "./component/login/login";
import Signup from "./component/login/signup";

function App() {
  const { user } = useUser();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={user ? <Landing /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
