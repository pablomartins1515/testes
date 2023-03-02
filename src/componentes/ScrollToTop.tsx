import { useState, useEffect } from 'react';

interface ScrollProps {
  showBelow?: number;
}

const ScrollToTop: React.FC<ScrollProps> = ({ showBelow = 100 }) => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!showScroll) setShowScroll(true);
    } else {
      if (showScroll) setShowScroll(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showScroll && (
        <button className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white" onClick={handleClick}>
          Aperte Aqui
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
