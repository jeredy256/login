import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../services";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importe createUserWithEmailAndPassword

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword
      navigate("/home");
    } catch (error) {
      console.error("Erro de registro:", error);
      alert("Erro de registro. Verifique seu email e senha.");
    }
  };

  if (user) {
    navigate("/home");
    return null;
  }

  return (
    <div className="container">
      <h1>Registro</h1>
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
      <button onClick={handleRegister}>Registrar</button>
      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
};

export default Register;
