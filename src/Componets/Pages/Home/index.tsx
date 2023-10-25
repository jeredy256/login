import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../services";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container">
      <h1>Página Protegida</h1>
      <p>Olá, {user.email}!</p>
      <Link to="/login" onClick={() => auth.signOut()}>Logout</Link>
    </div>
  );
};

export default Home;
