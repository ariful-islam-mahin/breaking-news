import React from 'react';
import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h1>React Bootstrap</h1>
      <Header></Header>
      <News></News>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
