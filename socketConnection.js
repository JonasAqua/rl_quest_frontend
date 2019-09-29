import io from 'socket.io-client'
const socket = io('http://165.227.184.33')

socket.on('locationUpdate', function (data) {
    console.log(data);
})