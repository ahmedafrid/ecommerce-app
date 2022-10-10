import React from 'react'

export default function OrderSuccess( {orders} ) {
    console.log(orders)
  return (
    <>
      <div className="my-5 container card text-center">
        <h4 className="my-3">Order Placed Successfully</h4>
        <p>Delivery Address: {orders.address} </p>
        <a href="/" className="btn btn-success">
          Go to Home
        </a>
      </div> 
    </>
  );
}
