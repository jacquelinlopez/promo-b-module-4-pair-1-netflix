const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


// endpoint peliculas
server.get("/movie", (req, res) =>{

  res.json ({
    success: true,
        movies: [
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
  })
})