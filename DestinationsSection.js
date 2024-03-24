import React from 'react';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://source.unsplash.com/random/800x600?paris',
      description: 'The City of Love',
    },
    {
      id: 2,
      name: 'Tokyo',
      image: 'https://source.unsplash.com/random/800x600?tokyo',
      description: 'The Land of the Rising Sun',
    },
    // Add more destinations here
  ];

  return (
    <section className="destinations">
      {destinations.map((destination) => (
        <div key={destination.id} className="destination">
          <img src={destination.image} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </div>
      ))}
    </section>
  );
};

export default DestinationsSection;