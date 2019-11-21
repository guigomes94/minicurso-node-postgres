import pool from '../config/conn';

class ArtistController {
  async index(req, res) {

    try {
      const result = await pool.query('SELECT * FROM artist');
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await pool.query(`SELECT * FROM artist WHERE idartist = ${id}`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
  }

  async store(req, res) {
    const { name } = req.body;

    try {
      await pool.query(`INSERT INTO artist VALUES(nextval('artist_idartist_seq'),'${name}')`);
      res.status(201).send({ message: "OK!" });
      
    } catch (err) {
      res.status(404).send({ "erro": err.message });
    }
  }


  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      await pool.query(`UPDATE artist SET name = '${name}' WHERE idartist = ${id}`);
      res.status(200).send({ message: "OK!" });

    } catch (err) {
      res.status(404).send({ "erro": err.message });
    } 
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await pool.query(`DELETE FROM artist WHERE idartist = ${id}`)
      res.status(200).send({ message: "OK!" })

    } catch (err) {
      res.status(404).send({"erro": err.message});
    }
  }

}

export default new ArtistController();