// HTML refs
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect',() => {
    // console.log('connected');

    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect',() => {
    // console.log('disconnected');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id:123123,
        date: new Date().getTime()
    }
    
    socket.emit('send-message', payload, (id)=>{
        console.log(id);
    })
});

socket.on('send-message',(payload) => {
    console.log('custom-event', payload);

});