
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';
import StyledWordDisplay from './components/StyledWordDisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<ValueDisplay />} />
        <Route path="/hello/:word" element={<WordDisplay />} />
        <Route path="/hello/:word/:textColor/:bgColor" element={<StyledWordDisplay />} />
      </Routes>
    </Router>
  );
};

const ValueDisplay = () => {
  const { value } = useParams();
  return isNaN(value) ? <WordDisplay word={value} /> : <NumberDisplay number={value} />;
};

export default App;
