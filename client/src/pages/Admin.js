import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ORDERS } from "../utils/queries";
import { UPDATE_ORDER_STATUS } from "../utils/mutations";
import OrderItem from "../components/Admin/OrderItem";
import { getTimeSinceOrderPlaced } from "../utils/helpers";
import { Row, Col, Button } from "antd";
import "../components/Admin/Admin.css"

const Admin = () => {
  const { loading, data } = useQuery(GET_ORDERS);
  const [updateOrderStatus] = useMutation(UPDATE_ORDER_STATUS);
  console.log("1st", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { getOrders } = data;

  if (getOrders.length === 0) {
    return <p>No orders found.</p>;
  }

const handleStatusUpdate = (_id, status) => {
    updateOrderStatus({
      variables: {
        _id,
        status,
      },
      refetchQueries: [{ query: GET_ORDERS }],
    });
  };

  return (
<div>
      <h1>Admin</h1>
      {getOrders.map((order) => {
        const { _id, purchaseDate, status, orderBy, products } = order;
        const timeSinceOrderPlaced = getTimeSinceOrderPlaced(purchaseDate);

        return (
          <div key={_id} className="order-container">
            <Row gutter={[16, 16]}>
              <Col span={4}>{orderBy.firstName}</Col>
              <Col span={6}>
                {products.map((product) => (
                  <OrderItem key={product._id} product={product} />
                ))}
              </Col>
              <Col span={4}>{timeSinceOrderPlaced}</Col>
              <Col span={10}>
                <div className="button-container">
                  {status === "Pending" && (
                    <>
                      <Button type="link" onClick={() => handleStatusUpdate(_id, "Rejected")}>
                        Reject
                      </Button>
                      <Button type="primary" onClick={() => handleStatusUpdate(_id, "Accepted")}>
                        Accept
                      </Button>
                    </>
                  )}
                  {status === "Accepted" && (
                    <Button type="primary" onClick={() => handleStatusUpdate(_id, "Completed")}>
                      Complete
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
