// HTML refs
const lblDesktop = document.querySelector('h1');
const btnAttend = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlert = document.querySelector('.alert');
const lblPendins = document.querySelector('#lblPendins');

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('desktop')) {
    window.location = 'index.html'
    throw new Error('Desktop is mandatory')
}

const desktop =  searchParams.get('desktop');
lblDesktop.innerText = desktop;

divAlert.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    btnAttend.disabled = false;

});

socket.on('disconnect', () => {
    // btnAttend.disabled  = true;
});

socket.on('pending-tickets', (tickets) => {
    if (tickets === 0) {
        lblPendins.style.display = 'none';
    } else {
        lblPendins.style.display = '';
        lblPendins.innerText = tickets;
    }
});

btnAttend.addEventListener( 'click', () => {
    socket.emit('attend-ticket',{ desktop }, ( {ok, ticket, msg} )=>{
        if (!ok) {
            lblTicket.innerText = 'No one.';
            return divAlert.style.display = '';
        } 

        lblTicket.innerText = `Ticket ${ticket.number}`;
    })
    // socket.emit( 'next-ticket', null, ( ticket ) => {
    //     lblNewTicket.innerText = ticket;
    // });

});