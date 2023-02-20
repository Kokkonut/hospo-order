import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../utils/queries';
import Order from '../components/Admin/Order';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  const { loading, error, data } = useQuery(GET_ORDERS);

  useEffect(() => {
    if (data) {
      setOrders(data.orders);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );


// fortesting
//     return (
//         <div>
//             <h2>Admin</h2>
//         </div>
//     );
};

export default Admin;
