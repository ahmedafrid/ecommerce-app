import React, {useState} from 'react'
import OrderSuccess from './orderSuccess';

export default function Order( {CartData} ) {

  const [orders, setorders] = useState({
    name:"",
    phone: "",
    email: "",
    address: "",
  })

  const [showOrder, setshowOrder] = useState(true);

  let sum = 0;
  return (
    <>
      {showOrder ? (
      <div className="container">
        <h2 className="my-5 text-center">Checkout</h2>
        <div className="row">
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
              <div className="row">
                <div className="mb-3">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={orders.name}
                    onChange={(event) => {
                      setorders({ name: event.target.value });
                    }}
                  />
                  <div className="invalid-feedback">
                    Valid name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="phone">Phone number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  value={orders.phone}
                  required
                  onChange={(event) => {
                    setorders({ phone: event.target.value });
                  }}
                />
                <div className="invalid-feedback">
                  Valid phone number is required.
                </div>
              </div>

              <div className="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={orders.email}
                  onChange={(event) => {
                    setorders({ email: event.target.value });
                  }}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={orders.address}
                  onChange={(event) => {
                    setorders({ address: event.target.value });
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-success"
                  onClick={() => {
                    setshowOrder(false);
                  }}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart items</span>
            </h4>

            {CartData.map((item) => {
              {
                sum = sum + item.price;
              }
              return (
                <>
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">{item.title}</h6>
                        <small className="text-muted">
                          {item.description.slice(0, 50) + "..."}
                        </small>
                      </div>
                      <span className="text-muted">${item.price}</span>
                    </li>
                  </ul>
                </>
              );
            })}
            <h5 className="list-group-item d-flex justify-content-between">
              Total amount <span className="ms-auto"> $ {sum}</span>
            </h5>
          </div>
        </div>
        <hr className="mb-4" />
      </div>
      ) : ( 
      <OrderSuccess orders={orders} />
      )}
    </>
  );
}
