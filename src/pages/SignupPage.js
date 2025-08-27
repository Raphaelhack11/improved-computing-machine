import React, { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const result = await signup(email, password);
    if (result.message === "User created, verification email sent") {
      alert("Check your email for verification");
      navigate("/login");
    } else {
      alert(result.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupPage;
