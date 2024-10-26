import "../Women/Women.css";
import womenClothingData from "../../Data/womenClothingData";

function Women({ onAddToCart }) {
  return (
    <div>
      <h3>Women’s Clothes</h3>
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
            <button onClick={onAddToCart}>Add to Cart</button> {/* Call parent function */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;