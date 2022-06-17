import {io} from 'socket.io-client';

const socket = io('http://10.91.55.162');

const messages = document.getElementById('messages');

socket.on('chat message', (msg: string) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

const form = document.getElementById('form');
const input = document.getElementById('input') as HTMLInputElement;

form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
})
