import React from "react";
import Layout from "../components/layout/Layout.js";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"page not found"}>
      <div className="pnf-center">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading"> Oops!! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          <button>Go back</button>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
