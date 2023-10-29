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
      <h1 className="text-4xl">testando</h1>
      <button className="text-red-900 bg-black"><Link to="/">click</Link></button>
      <br/>
      <Link className="text-blue-600 text-2xl" to="/login" onClick={() => auth.signOut()}>Logout</Link>
    </div>
  );
};

export default Home;
