import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../services";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirecionar para a página de login após o registro
    } catch (error) {
      console.error("Erro de registro:", error);
      alert("Erro de registro. Verifique seu email e senha.");
    }
  };

  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-4">
        <h1 className="text-center text-3xl font-extrabold text-gray-800">Registro</h1>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2 rounded-md"
        >
          Registrar
        </button>

        <p>
          Já tem uma conta?{" "}
          <Link to="/" className="text-blue-600">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
