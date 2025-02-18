const express = require('express');
const cors = require('cors');
const mysql = require ("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// nos conectamos a la base de datos
async function connectBD (){
  const conex = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password:'21Almudenita09',
      database:'netflix',
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
})


// Puerto
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
