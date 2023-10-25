import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../services";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importe signInWithEmailAndPassword

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword
      navigate("/home");
    } catch (error) {
      console.error("Erro de login:", error);
      alert("Erro de login. Verifique seu email e senha.");
    }
  };

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>
        Não tem uma conta? <Link to="/registre" >Registre-se</Link>
      </p>
    </div>
  );
};

export default Login;
