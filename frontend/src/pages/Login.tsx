import { useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const error = "we have error";

  const handleClick = (e: any): void => {
    e.preventDefault();
    // login(email, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link to="/forgotpassword/email">forgot password</Link>
      <button onClick={handleClick}>login</button>
      <div
        style={error ? { visibility: "visible" } : { visibility: "hidden" }}
        className="error"
      >
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
