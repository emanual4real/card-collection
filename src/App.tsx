import React from 'react';
import TradingCard from './Cards/TradingCard';
import './App.css';
import { spellfireCard } from './Cards/__fixtures__/cards.fixtures';

const App = () => (
  <div className="App">
    <TradingCard card={spellfireCard} size="small" />
  </div>
);

export default App;
