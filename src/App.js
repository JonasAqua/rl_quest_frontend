import React from 'react';
import LoginView from './screens/LoginView'
import MapView from './screens/MapView'
import io from 'socket.io-client'
const socket = io('http://localhost:3500')

function App() {
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  })
  return <LoginView />
}

export default App;
