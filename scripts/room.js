const selectedId = localStorage["selectedId"];
let roomToDisplay = {};

const renderRoom = (room) => {
    document.querySelector('.room-location').textContent = room.hostel;
    document.querySelector('.room-photo').setAttribute('src', `../assets/images/${room.photo}`);
    document.querySelector('.description').textContent = room.description;
    document.querySelector('.pricing').textContent = `Price: GHS ${room.price}`;
};

const selectRoom = (rooms) => {
    [ roomToDisplay ] = rooms.filter(room => room.id == selectedId);
    renderRoom(roomToDisplay);
};

fetch('../scripts/rooms.json')
.then(response => response.json())
.then(selectRoom);