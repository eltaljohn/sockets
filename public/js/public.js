// HTML refs
const lblTicket1 = document.querySelector('#lblTicket1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblDescktop1 = document.querySelector('#lblDescktop1');
const lblDescktop2 = document.querySelector('#lblDescktop2');
const lblDescktop3 = document.querySelector('#lblDescktop3');
const lblDescktop4 = document.querySelector('#lblDescktop4');

const socket = io();

socket.on('connect', () => {
    // lblNewTicket.disabled = false;

});

socket.on('disconnect', () => {
    // lblNewTicket.disabled  = true;
});

socket.on('current-state', (tickets) => {
    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();

    const [ ticket1, ticket2, ticket3, ticket4 ] = tickets;
    
    if (ticket1) {
        lblTicket1.innerText = 'Ticket ' + ticket1.number;
        lblDescktop1.innerText = ticket1.desktop;
    }

    if (ticket2) {
        lblTicket2.innerText = 'Ticket ' + ticket2.number;
        lblDescktop2.innerText = ticket2.desktop;
    }

    if (ticket3) {
        lblTicket3.innerText = 'Ticket ' + ticket3.number;
        lblDescktop3.innerText = ticket3.desktop;
    }

    if (ticket4) {
        lblTicket4.innerText = 'Ticket ' + ticket4.number;
        lblDescktop4.innerText = ticket4.desktop;
    }
});