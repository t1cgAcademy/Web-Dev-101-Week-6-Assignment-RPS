import React, { Component } from 'react';
import './App.css';

const PlayerCard = props => {
  // The style object below is passed to style attribute in div
  // so that the style of content changes according to prop values.
  // This is a great example of reusability!!
  const style = {
    // Define key backgroundValue set to the value color prop
    backgroundImage: 'url(./img/' + props.symbol + '.png)',
  };

  return (
    <div style={style} className="player-card">
      {/* display symbol prop here */}
    </div>
  );
};

export default PlayerCard;
