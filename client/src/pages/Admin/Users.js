import React from "react";
import Layout from "../../components/layout/Layout";
import Header from "../../components/layout/Header";
import AdminMenu from "../../components/layout/AdminMenu";

const Users = () => {
  return (
    // <Layout title={"Dashboard - All Users"}>
    <>
      <div className="row text-center mt-5">
        <Header />
      </div>
      <div className="container-fluid text-center m-5 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default Users;
