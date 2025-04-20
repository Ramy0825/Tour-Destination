//Task 2 - Add destination filter dropdown and manage selected tour state

//This file contains a React component for selecting a tour destination. 
//It uses props for the list of tours, the currently selected tour, and a function to update the selection.
import React from 'react';

//A dropdown menu component for choosing a tour destination.
const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => {
  return (
    <div className="destination-selector">
      {/* Label for the dropdown menu */}
      <label htmlFor="destination">Choose a Destination:</label>
      
      {/* Dropdown menu for selecting a destination */}
      <select
        //Connects the label to this dropdown
        id="destination"
        
        //Sets the currently selected destination
        value={selectedTour}
        
        //Updates the selected destination when changed
        onChange={(e) => setSelectedTour(e.target.value)} 
      >
        {/* Option to show all destinations */}
        <option value="all">All Destinations</option>
        
        {/* Generate an option for each tour */}
        {tours.map((tour) => (
          <option key={tour.id} value={tour.name}>
            {/* Display the name of the tour */}
            {tour.name} 
          </option>
        ))}
      </select>
    </div>
  );
};

//Makes the component available for use in other files such as App.jsx.
export default DestinationSelector;