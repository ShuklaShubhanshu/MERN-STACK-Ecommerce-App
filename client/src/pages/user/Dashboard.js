import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    // <Layout title={"DashBoard - Ecommerce App"}>
    <>
      <div className="row text-center mt-5">
        <Header />
      </div>
      <div className="container-fluid m-2 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 text-center">
            <div className="card w-85 m-3">
              <h1>User Name: {auth?.user?.name}</h1>
              <h1>User Email: {auth?.user?.email}</h1>
              <h1>User Contact: {auth?.user?.phone}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-5 fixed-bottom">
        <Footer />
      </div>
    </>
    // </Layout>
  );
};

export default Dashboard;
