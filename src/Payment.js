import React from 'react';
import { Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

const Payment = () => {
   
    const[{basket, user}, dispatch] = useStateValue();
    


  return <div className='payment'>
      <div className="payment__container">
        <h1>
          Checkout (
            {<Link to="/checkout">{basket?.length} items</Link> }
            
          )
        </h1>


          {/* Payment section delivery add */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Indore, India</p>
                </div>
            </div>
          {/* Payment section review items */}
            <div className="payment__section">
              <div className="payment__title">
                <h3>Review items and delivery</h3>
              </div>
              <div className="payment__items">
                {basket.map(item => (
                  <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  /> 
                ))}
              </div>
            </div>
          {/* Payment section payment method */}
            <div className="payment__section">
             <div className="payment__title">
               <h3>Payment Method</h3>
             </div>
             <div className="payment__details">
               {/* Stripe  */}
             </div>
            </div>

      </div>
  </div>;
};

export default Payment;
