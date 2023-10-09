import React, { useState } from 'react';
import './AboutPage.css'; // Import the CSS file
import { FaShoppingCart } from 'react-icons/fa';

// Import your product images
import product2Image from './images/f75bc1013b70b588df6d2c3375e08194-removebg-preview.png';
import product3Image from './images/8b34883eebb4781c3062cb64a804caaa-removebg-preview.png';
import product4Image from './images/37d0acd7bfdde2fcabb2b1713d0f9166-removebg-preview.png';
import product5Image from './images/5edf4e1ecf4c05b3e156695ea89a5b55-removebg-preview.png';
import product6Image from './images/4fbad5e66bb517f5328a0f71f7b840df.jpg';
import product7Image from './images/8aeff08509132def00c2715f4f3f35d0-removebg-preview.png';
import product8Image from './images/cdefc2805023dc5a5b5c889d62577705-removebg-preview.png';
import product9Image from './images/d0abc9113968e250adaa72c562860d5d-removebg-preview.png';
import product10Image from './images/2d0a8fb9cbfe159b189ba2eb0ac99f9b-removebg-preview.png';
import product11Image from './images/5714a9d03818c048078e434029b6b599-removebg-preview.png';
import product12Image from './images/7207f3fee1727cfa6bc216f8746323d8-removebg-preview.png';
import product13Image from './images/322ac848af68d5e34df4d092e4421c22-removebg-preview.png';
import product14Image from './images/6c462089ec5bdbf60c73786b1a1d32da-removebg-preview.png';
import product15Image from './images/858eed875aa752b9b1f56ae16a941d37-removebg-preview.png';
import product16Image from './images/57e0420c44e26317f805a65e8ff92a63-removebg-preview.png';
import product17Image from './images/e147d38d4a82cdb419399c9077b2e3a3-removebg-preview.png';
import product18Image from './images/725b60b98569759ba731816b344dfa74-removebg-preview.png';
import product19Image from './images/7663cd59d8816ee49f797c0edafcf74e-removebg-preview (1).png';
import Image from './images/58a8f95d8cff948cd8073718b412754e.jpg';

// Add more product images as needed

const AboutPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ setIsOrderPlaced] = useState(false);
  const [showAddedToCartPopup, setShowAddedToCartPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setAddedItem(product);
    setShowAddedToCartPopup(true);

    // Automatically hide the popup after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setShowAddedToCartPopup(false);
    }, 2000);
  };

  const handleOrderNow = () => {
    setIsOrderPlaced(true);
    setShowOrderConfirmation(true);

    // Automatically hide the confirmation message after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setShowOrderConfirmation(false);
    }, 2000);
  };
 

  const isCartEmpty = cart.length === 0;

  return (
    <div>
    <div className='container'>
    <div> <img src={Image} alt="Product 6" className="image2" />


</div>
   <div className='back2'>  
   
   <h1>CHECKOUT NEW</h1>
   <h1 className='back3'>COLLECTION </h1>
   
     </div>
     </div>
      
      <button
        className="cart-button2"
        onClick={() => !isCartEmpty && setIsCartOpen(!isCartOpen)}
      >
        <FaShoppingCart /> cart
      </button>

      {!isCartEmpty && isCartOpen && (
        <div className="cart">
          <h3>Shopping Cart</h3>
          {/* ... (other cart content) */}
        </div>
      )}

      {isCartOpen && (
        <div className="cart">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <span>{item.name}</span>
            </div>
          ))}
          <button onClick={handleOrderNow}>
            <FaShoppingCart /> Order Now
          </button>
        </div>
      )}
 {showOrderConfirmation && (
    <div className="order-confirmation">
      <p>Order placed successfully!</p>
    </div>
  )}
      <div>
      <h1 className="section1">Mens Collections</h1>
<div className="product-section">
  <div className="product-card">
    <img src={product5Image} alt="Mens olive green shirt" className="product-image" />
    <p>olive green double layer  shirt </p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens olive green shirt', image: product5Image })}> <FaShoppingCart />Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product2Image} alt="Product 1 - Section 1" className="product-image" />
    <p>Grey double layer shirt</p>
    <p>Price: $10.99</p>
   
    <button onClick={() => addToCart({ name: 'Mens grey shirt', image: product2Image})}> <FaShoppingCart />Add to Cart</button>
    </div>
  <div className="product-card">
    <img src={product3Image} alt="Product 1 - Section 1" className="product-image" />
    <p>Wooden Brown double layer shirt</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens wooden brown shirt', image: product3Image})}> <FaShoppingCart />Add to Cart</button>
    </div>
  <div className="product-card">
    <img src={product4Image} alt="Product 1 - Section 1" className="product-image" />
    <p>Blue denim double layer shirt</p>
    <p>Price: $10.99</p>
   
    <button onClick={() => addToCart({ name: 'Mens denim shirt', image: product4Image})}> <FaShoppingCart />Add to Cart</button>
    </div>
  <div className="product-card">
    <img src={product7Image} alt="Product 1 - Section 1" className="product-image" />
    <p>half seleves double layer shirt</p> 
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens half selves shirt', image: product7Image})}><FaShoppingCart />Add to Cart</button>
    </div>
  <div className="product-card">
    <img src={product8Image} alt="Product 1 - Section 1" className="product-image" />
    <p>half seleves double layer shirt</p> 
    <p>Price: $10.99</p>
    
    <button onClick={() => addToCart({ name: 'Mens half selves shirt', image: product8Image})}><FaShoppingCart />Add to Cart</button>
    </div>
</div>
</div>

<div>
<h3 className="section2">MENS SPORT SHOES</h3>
<div className="product-section">
  <div className="product-card">
    <img src={product6Image} alt="Product 1 - Section 2" className="product-image" />
    <p>Athletic Performance Footwear</p> 
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens footware', image: product6Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product9Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Sports Shoe Innovation</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens footware', image: product9Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product10Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Formal cut shoes</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens footware', image: product10Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product11Image} alt="Product 1 - Section 2" className="product-image" />
    <p>Sports Shoe Innovation</p>
    <p>Price: $10.99</p>
    
    <button onClick={() => addToCart({ name: 'Mens footware', image: product11Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product12Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Active Lifestyle Sneakers</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens footware', image: product12Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product13Image} alt="Product 1 - Section 2" className="product-image" />
    
    <p>Athletic Performance Footwear
</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Mens footware', image: product13Image })}>Add to Cart</button>
  </div>
  {/* Repeat this block for the other 3 products in Section 2 */}
</div>
</div>
<div>
<h3 className="section3">WOMENS BAGS COLLECTION</h3>
<div className="product-section">
  <div className="product-card">
    <img src={product14Image} alt="Product 1 - Section 2" className="product-image" />
   
    <p>Chic in Pink</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Chic in Pink', image: product14Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product15Image} alt="Product 1 - Section 2" className="product-image" />
 
    <p>Bold and Red Bag</p>
    <p>Price: $10.99</p>
  
    <button onClick={() => addToCart({ name: 'Bold and Red Bag', image: product15Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product16Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Floral Elegance beauty</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Floral Elegance beauty', image: product16Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product17Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Pretty in Pink</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'Pretty in Pink', image: product17Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product18Image} alt="Product 1 - Section 2" className="product-image" />
  
    <p>Price: $10.99</p>
    <p>Olive Green Delight</p>

    <button onClick={() => addToCart({ name: 'Olive Green Delight', image: product18Image })}>Add to Cart</button>
  </div>
  <div className="product-card">
    <img src={product19Image} alt="Product 1 - Section 2" className="product-image" />
    <p>White perfection</p>
    <p>Price: $10.99</p>

    <button onClick={() => addToCart({ name: 'White perfection', image: product19Image })}>Add to Cart</button>
  </div>
  {/* Repeat this block for the other 3 products in Section 2 */}
</div>
</div>

<div>
{/* Repeat the above structure for Section 3 and Section 4 */}
</div>




      {/* Repeat the above structure for other sections */}
      
      {/* Added to Cart Popup */}
      {showAddedToCartPopup && (
        <div className="added-to-cart-popup">
          Added to Cart: {addedItem.name}
        </div>
      )}
      
    
    </div>
  );
};

export default AboutPage;


