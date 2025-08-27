import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.token) {
      localStorage.setItem("token", result.token);
      navigate("/dashboard");
    } else {
      alert(result.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
