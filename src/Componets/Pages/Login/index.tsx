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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-4">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">Login</h1>

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
          className="w-full bg-green-500 text-white p-2 rounded-md"
          onClick={handleLogin}
        >
          Entrar
        </button>

        <p>
          Não tem uma conta?{" "}
          <Link to="/registre" className="text-blue-700">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
