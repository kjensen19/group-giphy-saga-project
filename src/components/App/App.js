import React from 'react';
import Nav from '../Nav/Nav';
import GifList from '../GifList/GifList';


function App(props) {
  return (
    <div>
      <Nav />
      <h1>Giphy Search!</h1>
      <GifList />
    </div>
  );
}

export default App;
