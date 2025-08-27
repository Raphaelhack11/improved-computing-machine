import { useState } from "react";
import { signup } from "../api/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(email, password);
      if (data.message) {
        setMessage("Signup successful ✅");
      } else {
        setMessage(data.error || "Signup failed ❌");
      }
    } catch {
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
    </div>
  );
    }
