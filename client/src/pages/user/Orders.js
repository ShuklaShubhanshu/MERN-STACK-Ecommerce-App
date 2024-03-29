import React, { useEffect, useState } from "react";
import UserMenu from "../../components/layout/UserMenu";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";
import moment from "moment";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState();
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);
  // handle cancel order
  const handleCancelOrder = async (id) => {
    try {
      let ans = window.prompt(
        "Are you sure you want to cancel order for this product?"
      );
      if (!ans) return;
      console.log("id.....", id);

      const data = await axios.delete(`/api/v1/product/cancel-order/${id}`);
      toast.success("Order cancelled successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error in cancelling order");
    }
  };
  return (
    // <Layout title={"Dashboard - All Orders"}>
    <>
      <div className="row text-center mt-5">
        <Header />
      </div>
      <div className="container-fluid m-2 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">My Orders</h1>
            {orders ? (
              <h3 className="text-center" style={{ marginTop: "150px" }}>
                You have not ordered anything yet. Try something from
                <Link to={"/"}> here</Link>
              </h3>
            ) : (
              orders?.map((o, i) => {
                return (
                  <div className="border shadow m-4 p-3">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyers</th>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Order Cancellation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o?.status}</td>
                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createdAt).fromNow()}</td>
                          <td>{o?.payment.success ? "Success" : "Failed"}</td>
                          <td>{o?.products?.length}</td>
                          <td>
                            {" "}
                            {/* <div
                            className="col-md-4 cart-remove-btn"
                            style={{
                              marginLeft: "200px",
                              marginBottom: "30px",
                            }}
                          > */}
                            <button
                              className="btn btn-danger"
                              onClick={() => handleCancelOrder(o._id)}
                            >
                              Cancel Order
                            </button>
                            {/* </div> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      {o?.products?.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p._id}>
                          <div className="col-md-2">
                            <img
                              src={`/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                              width="100px"
                              height={"100px"}
                            />
                          </div>
                          <div className="col-md-6">
                            <p>{p.name}</p>
                            <p>{p.description}</p>
                            <p>Price : {p.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {/* <div className="row text-center mt-5">
        <Footer />
      </div> */}
    </>
    // </Layout>
  );
};

export default Orders;
