// HTML references
const lblNewTicket = document.querySelector('#lblNewTicket');
const btnCreate = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
    lblNewTicket.disabled = false;

});

socket.on('disconnect', () => {
    lblNewTicket.disabled  = true;
});

socket.on('last-ticket', (ticket) => {
    lblNewTicket.innerText = `Ticket ${ticket}`;
});


btnCreate.addEventListener( 'click', () => {

    socket.emit( 'next-ticket', null, ( ticket ) => {
        lblNewTicket.innerText = ticket;
    });

});