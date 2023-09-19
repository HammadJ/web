import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add an event listener to hide the preloader when the page is fully loaded
    window.addEventListener('load', () => {
      setIsLoading(false);
    });

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('load', () => {
        setIsLoading(false);
      });
    };
  }, []);

  return (
    isLoading && (
      <div id="preloader">
        <div />
        <div />
        <div />
        <div />
      </div>
    )
  );
};

export default Preloader;
