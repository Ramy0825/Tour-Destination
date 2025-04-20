//Task 1 - Set up tour data fetching with useEffect and error handling

//Importing tools from React: useState to manage values, useEffect to run code when the component loads
import React, { useEffect, useState } from 'react';

//Importing the TourCard component, which is used to display each tour
import TourCard from './TourCard';

//The URL to get the tour data from the API (uses a proxy to avoid issues with permissions)
const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project';

//The Gallery component is responsible for fetching and displaying all the tours
const Gallery = ({ tours, setTours, onRemove }) => {
  //A state variable to show "Loading..." while the data is being fetched
  const [loading, setLoading] = useState(true);

  //A state variable to show an error message if something goes wrong
  const [error, setError] = useState(false);

  //A function to get the tour data from the API
  const fetchTours = async () => {
    try {
      //Show the loading screen
      setLoading(true);
      const response = await fetch(url);

      //If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }

      //Convert the response to JSON and save it using the parent component's state
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log('Fetch error:', error);

      //Show the error screen if something goes wrong
      setError(true);

      setLoading(false);
    } finally {
      // Stop showing the loading screen
      setLoading(false);
    }
  };

  //Run the fetchTours function only once when the component is first loaded
  useEffect(() => {
    fetchTours();
  }, []);

  //If the data is still loading, show "Loading..."
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //If there was an error while fetching the data, show an error message
  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  //Task 4 - Display message and refresh button when all tours are removed
  
  //If there are no tours left, show a message and a button to refresh the tours
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  //Task 3 - Render tours with TourCard and implement Not Interested removal
  
  //Display all the tours by creating a TourCard for each tour
  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          //A unique key to help React keep track of each tour
          key={tour.id}

          //Pass all the tour details as props to the TourCard component
          {...tour}

          //Pass the function to remove a tour when the user clicks "Not Interested"
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};

//Exporting the Gallery component so it can be used in other files like App.jsx
export default Gallery;