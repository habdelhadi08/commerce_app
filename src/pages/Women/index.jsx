import "../Women/Women.css";
import womenClothingData from "../../Data/womenClothingData";
import { useState } from "react";

function Women() {
    const [cartCount, setCartCount] = useState(0); // Track the number of items in the cart

    const addToCart = () => {
      setCartCount(cartCount + 1); // Increment the cart count
    };
      
       
      
  return (
    <div>
      <h2>Women`s Clothes</h2>
      <div className="product-list">
        {womenClothingData.map((data, index) => (
          <div key={index} className="product-card">
            <img 
              src={data.imageUrl} 
              alt={data.name} 
              className="product-image" 
            />
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Price:</strong> ${data.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {data.category}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Women;