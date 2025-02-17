const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

const movies = [
  {
    id: '1',
    title: 'Gambita de dama',
    genre: 'Drama',
    image:
      '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg'
  },
  {
    id: '2',
    title: 'Friends',
    genre: 'Comedia',
    image:
      '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/friends.jpg'
  }
]

// endpoint peliculas
server.get("/movies", (req, res) =>{

  res.json ({
    success: true,
        movies: fakeMovies
  })
});

const fakeMovies = [
  {
    id: 1,
    title: "Wonder Woman",
    genre: "Action",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/12/gal-gadot-como-wonder-woman-universo-extendido-dc-2895594.jpg?tf=3840x",
    category: "Superhero",
    year: 2017,
    director: "Patty Jenkins",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Science Fiction",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
    category: "Thriller",
    year: 2010,
    director: "Christopher Nolan",
  },
];



// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
