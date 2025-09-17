import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(username, password);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.id);
        navigate("/profile");
      })
      .catch(() => setError("Something went wrong"));
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password">
          <input
            type={open ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setOpen(!open)} className="password-button">
            {open ? "😃" : "😵"}  
          </button>
        </div>
        <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
          Login
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
