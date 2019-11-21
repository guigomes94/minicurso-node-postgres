import pool from "../config/conn";

class ArtistController {
  index(req, res) {
    pool.query('SELECT * FROM artist', (err, result) => {
      if (err) {
        res.status(500).send(err.stack);
      }
        
      else {
        const resultado = result.rows;
        
        res.status(200).send(resultado);
      }
  
    });
  }

  show(req, res) {
    const id = req.params.id;

    pool.query(`SELECT * FROM artist WHERE idartist = ${id}`, (err, result) => {
      if (err) {
        res.status(500).send(err.stack);
      }
        
      else {
        const resultado = result.rows;
        
        res.status(200).send(resultado);
      }
    })
  }

  store(req, res) {
    const { name } = req.body;
    
    pool.query(`INSERT INTO artist VALUES(nextval('artist_idartist_seq'),'${name}')`, (err, result) => {
      if (err) {
        res.status(501).send(err.stack);
      }
      else {
        res.status(201).send({message: "OK!!!"});
      } 
    });
  }

  update(req, res) {
    const id = req.params.id;
    const { name } = req.body;

    pool.query(`UPDATE artist SET name = '${name}' WHERE idartist = ${id}`, (err, result) => {
      if(err) {
        res.status(501).send(err.stack);
      }
      else {
        res.status(200).send({message: "OK!"});
      }
    });
  }

  destroy(req, res) {
    const id = req.params.id;
    
    pool.query(`DELETE FROM artist WHERE idartist = ${id}`, (err, result) => {
      if(err) {
        res.status(501).send(err.stack);
      }
      else {
        res.status(200).send({message: "OK!"});
      }
    });
  }
}


export default new ArtistController();
