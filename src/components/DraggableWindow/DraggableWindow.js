import React, { useState, useRef } from 'react';

const DraggableWindow = ({ onClose, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dragIndicatorRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Apply styles to the drag indicator
    if (dragIndicatorRef.current) {
      dragIndicatorRef.current.style.opacity = '1';
      dragIndicatorRef.current.style.border = '2px dotted black'; // Example style
    }
    // more code...
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset styles of the drag indicator
    if (dragIndicatorRef.current) {
      dragIndicatorRef.current.style.opacity = '0';
      dragIndicatorRef.current.style.border = 'none';
    }
    // more code...
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Update the position of the drag indicator
      const newPosition = {
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      };
      setPosition(newPosition);
      if (dragIndicatorRef.current) {
        dragIndicatorRef.current.style.top = `${newPosition.y}px`;
        dragIndicatorRef.current.style.left = `${newPosition.x}px`;
      }
    }
  };

  const windowStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    opacity: isDragging ? 0 : 1, // Make the window content invisible while dragging
    // more styles...
  };

  return (
    <div>
      <div
        ref={dragIndicatorRef}
        style={{
          position: 'fixed',
          width: '300px', // The initial width of your draggable window
          height: '150px', // The initial height of your draggable window
          top: `${position.y}px`,
          left: `${position.x}px`,
          opacity: 0, // Start invisible
          border: 'none', // No border initially
          boxSizing: 'border-box',
          // other styles you want to apply
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // You could also apply onMouseDown here if you want to start dragging from the indicator
      >
        {/* Maybe some visual content here if needed */}
      </div>
      <div
        className="window"
        style={windowStyle}
        onMouseDown={handleMouseDown}
      >
        <div className="title-bar">
          <div className="title-bar-text">Draggable Window</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose}></button>
          </div>
        </div>
        <div className="window-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DraggableWindow;

