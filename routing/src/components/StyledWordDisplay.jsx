import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordDisplay = () => {
  const { word, textColor, bgColor } = useParams();
  const style = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '10px',
    borderRadius: '5px'
  };
  return <h1 style={style}>{word}</h1>;
};

export default StyledWordDisplay;