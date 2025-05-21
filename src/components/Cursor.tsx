import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHover = () => setHovering(true);
    const handleLinkLeave = () => setHovering(false);
    
    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effect for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .tilt-card, .project-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
    opacity: hidden ? 0 : 1,
  };
  
  const cursorClass = `custom-cursor ${hovering ? 'hover' : ''}`;

  return <div className={cursorClass} style={cursorStyle}></div>;
};

export default Cursor;