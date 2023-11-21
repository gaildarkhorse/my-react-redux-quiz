import React, { useEffect } from 'react';

const HomeEndComponent = () => {
  const handleKeyPress = (e) => {
    if (e.key === 'Home') {
      window.scrollTo(0, 0);
    } else if (e.key === 'End') {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default HomeEndComponent;