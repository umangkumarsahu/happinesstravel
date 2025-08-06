import React from 'react';

const Destinations = () => {
  return (
    <section id="destinations" className="section">
      <h2>Featured Destinations</h2>
      <div className="gallery">
        <img src="https://source.unsplash.com/400x300/?maldives,beach" alt="Maldives" />
        <img src="https://source.unsplash.com/400x300/?bali,travel" alt="Bali" />
        <img src="https://source.unsplash.com/400x300/?switzerland,mountains" alt="Switzerland" />
        <img src="https://source.unsplash.com/400x300/?paris,eiffel" alt="Paris" />
        <img src="https://source.unsplash.com/400x300/?dubai,travel" alt="Dubai" />
        <img src="https://source.unsplash.com/400x300/?japan,temple" alt="Japan" />
      </div>
    </section>
  );
};

export default Destinations;