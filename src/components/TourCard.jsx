//Task 3 - Render tours with TourCard and implement Not Interested removal

//Importing tools from React: useState to manage values
import React, { useState } from "react";

//The TourCard component displays information about a tour, such as its name, price, image, and description.
//It also allows users to toggle between showing more or less of the description and to remove the tour from the list.
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  //State to track whether the full description is shown or just a truncated version
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-img" />
      
      <div className="tour-info">
        <div className="tour-header">
          {/* Display the tour name and price */}
          <h2>{name}</h2>
          <h3 className="tour-price">${price}</h3>
        </div>
        
        {/* Show the tour description. If readMore is false, show only the first 150 characters followed by '...'. Otherwise, show the full description */}
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          {/* Button to toggle between showing the full description or a shortened version */}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        
        {/* Button to remove the tour from the list */}
        <button className="not-interested" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

//Exporting the TourCard component so it can be used in Gallery.jsx
export default TourCard;