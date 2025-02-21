const express = require ('express');
const cors = require('cors');
const mysql = require ("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

// nos conectamos a la base de datos
async function connectBD (){
  const conex = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2212",
    database: "netflix",
  });
  conex.connect();
  return conex;
} 

// ENDPOINT para las películas
server.get('/api/movies', async (req, res)=>{
  try {
      const connection = await connectBD ();
      const sqlSelect = "SELECT * FROM movies";
      const [result] = await connection.query(sqlSelect);
      
      console.log (result);
      connection.end();
      if(result.length === 0){
          res.status(404).json({
              status: "error",
              message: "no se encontró peliculas",
          })
      } else {
          res.status(200).json({
            success: true,
            movies:  result
          })
      } 
      
  } catch (error) {
      res.status(500).json({
          status: "error",
          message: error,
      })
  }
});

//filtro por genero 

server.get("/api/movies/filter" , async (req,res) =>{
  const {genre} = req.query;

  const connection = await connectBD ();

  const select = `SELECT *  from  movies where genre like ? `;

  const [results] = await connection.query(select,[genre]);

  res.json({
    success: true,
    movies:results
  });
});

// endpoint para renderizar
// --> Si ponemos el foundMovie un id (1) nos sale la peli de id 1, pero si ponemos interrogación, nos sale un error de que las propiedades son undefined (title)

server.get('/movie/:idMovies', async (req,res)=>{
  const {idMovies} = req.params; 
  const connection = await connectBD (); 
  const foundMovie = "SELECT * FROM movies WHERE idMovies = ?";
  const [result] = await connection.query(foundMovie, [idMovies]);
  console.log(result)


  res.render("detail", {movie:result[0]})
});


// Puerto
const serverPort = 3307;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


// Servidor de estaticos para impotar el css

server.use(express.static('./css'));

