import React, { useState } from 'react';
import './App.scss';

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bgoverlay">
      <div className={'container' + (isOpen ? ' open' : '')}>
        <span className="ico">
          <span className="ico2"></span>
          <span className="title" onClick={() => setIsOpen(true)}>
            Click Me
          </span>
        </span>
        {isOpen && (
          <div className="endtext">
            <span
              className="close"
              title="Restart"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa fa-times"></i>
            </span>
            <h1>Dear Pyrizhok iz Vyshnyamy</h1>
            <h2>Will you be my valentine forever?</h2>
            <img src="/images/mouse.png" alt="mouse" />
            <audio autoPlay>
              <source src="/audio/love_you.mp3" type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};
