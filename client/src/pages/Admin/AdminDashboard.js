import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    // <Layout>
    <>
      <div className="row text-center mt-5">
        <Header />
      </div>
      <div className="container m-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center fixed-bottom">
        <Footer />
      </div>
    </>
    // </Layout>
  );
};

export default AdminDashboard;
