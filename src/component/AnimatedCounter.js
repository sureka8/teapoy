import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = targetNumber;
    const increment = (end - start) / (duration / 1); // Change per frame
    let current = start;
    
    const updateCounter = () => {
      current += increment;
      if (current < end) {
        setCurrentNumber(Math.round(current));
        requestAnimationFrame(updateCounter); // Continue animation
      } else {
        setCurrentNumber(end); // Ensure the final number is correct
      }
    };

    updateCounter();
  }, [targetNumber, duration]);

  return (
    <div className="text-yello text-7xl">
      {currentNumber}
    </div>
  );
};

export default AnimatedCounter;
