import React, { useState } from "react";
import Layout from "./../../components/layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyle.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some error has occured");
    }
  };
  return (
    // <Layout title="Login - Ecommerce App">
    <>
      <div className="row text-center mt-3">
        <Header />
      </div>
      <div className="form-container mt-5">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
      <div className="row text-center ">
        <Footer />
      </div>
    </>
    // </Layout>
  );
};

export default Login;
