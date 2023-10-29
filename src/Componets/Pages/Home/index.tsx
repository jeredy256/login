import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../services";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <>
    <Header />

    <button className="text bg-gray-500 rounded-2xl"><Link className="text-blue-600 text" to="/" onClick={() => auth.signOut()}>Logout</Link></button>
    <Footer/>
    </>
  
      
  );
};

export default Home;
