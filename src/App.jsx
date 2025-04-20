// Importing React hooks and components
import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
;
const App = () => {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  
  // State to track the selected destination filter
  const [selectedDestination, setSelectedDestination] = useState('all');
  
  // Initialize the tour data (you can replace this with an API call or static data)
  useEffect(() => {
    const initialTours = [
      { id: 1, name: 'Paris' },
      { id: 2, name: 'London' },
      { id: 3, name: 'Tokyo' },
      { id: 4, name: 'New York' }
    ];
    setTours(initialTours);
  }, []);
  
  // Remove a tour from the list
  const removeTour = (id) => {
    setTours((prevTours) => {
      const updatedTours = prevTours.filter(tour => tour.id !== id);
      
      // Reset the selected destination if no tours match the selected destination
      if (selectedDestination !== 'all' && !updatedTours.some(tour => tour.name === selectedDestination)) {
        setSelectedDestination('all');
      }

      return updatedTours;
    });
  };

  // Filter tours based on the selected destination
  const filteredTours = selectedDestination === 'all'
    ? tours
    : tours.filter(tour => tour.name === selectedDestination);

  return (
    <main>
      <h1>Our Tours</h1>

      {/* Destination selector component */}
      <DestinationSelector 
        tours={tours} 
        selectedTour={selectedDestination} 
        setSelectedTour={setSelectedDestination} 
      />
      
      {/* Gallery to display the filtered tours */}
      <Gallery 
        tours={filteredTours} 
        setTours={setTours} 
        onRemove={removeTour} 
      />
    </main>
  );
};

export default App;