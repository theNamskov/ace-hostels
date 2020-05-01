let rooms = [];

const createRoomCard = (room) => {
    const { id, hostel, description, price, photo } = room;

        const roomCard = document.createElement('a');
        roomCard.setAttribute('href', 'room.html');

        const roomPhoto = document.createElement('img');
        roomPhoto.classList.add('card-image');
        roomPhoto.setAttribute('src', `../assets/images/${photo}`);
        roomPhoto.setAttribute('alt', 'hostel room');

        const roomDescription = document.createElement('p');
        roomDescription.classList.add('description');
        roomDescription.textContent = description.substr(0, 80).concat('...');

        roomCard.appendChild(roomPhoto);
        roomCard.appendChild(roomDescription);


        roomCard.classList.add('room-card');

        roomCard.addEventListener('click', (event) => localStorage["selectedId"] = id);

        return roomCard;
}

const loadRooms = (allRooms) => {
    rooms = allRooms;
    const content = document.querySelector('#content');
    rooms.forEach( room => content.appendChild(createRoomCard(room)));
}

fetch("../scripts/rooms.json")
    .then(response => response.json())
    .then(loadRooms);