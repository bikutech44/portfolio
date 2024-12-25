import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles
import './progress.css';

const CircularProgress = ({ value, text }) => {
  const [progress, setProgress] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track animation state
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  // Function to handle scroll events
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPosition > 500) { // Only trigger animation if scrolled more than 500 pixels
      if (!animationTriggered) {
        // Animate the progress bar
        let start = 0;
        const end = value;
        const duration = 2000; // Animation duration in milliseconds
        const stepTime = 20;
        const steps = Math.ceil(duration / stepTime);
        const increment = (end - start) / steps;

        const animate = () => {
          start += increment;
          if (start >= end) {
            start = end;
          }
          setProgress(start);
          if (start < end) {
            setTimeout(animate, stepTime);
          }
        };

        setProgress(0); // Reset progress before starting animation
        animate();
        setAnimationTriggered(true); // Mark animation as triggered
      }
    } else {
      // Reset animation state if scrolling back above 500 pixels
      setAnimationTriggered(false);
    }
  }, [scrollPosition, value, animationTriggered]);

  return (
    <div className='progress-bar'>
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        styles={buildStyles({
          pathColor: `rgb(47, 96, 134)`,
          textColor: 'rgb(222, 222, 222)',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default CircularProgress;
