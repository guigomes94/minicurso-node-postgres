import pool from '../config/conn';

class GenderController {
  async index(req, res) {

    try {
      const result = await pool.query('SELECT * FROM Gender');
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await pool.query(`SELECT * FROM Gender WHERE idGender = ${id}`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
  }

  async store(req, res) {
    const { name } = req.body;

    try {
      await pool.query(`INSERT INTO Gender VALUES(nextval('Gender_idGender_seq'),'${name}')`);
      res.status(201).send({ message: "OK!" });
      
    } catch (err) {
      res.status(404).send({ "erro": err.message });
    }
  }


  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      await pool.query(`UPDATE Gender SET name = '${name}' WHERE idGender = ${id}`);
      res.status(200).send({ message: "OK!" });

    } catch (err) {
      res.status(404).send({ "erro": err.message });
    } 
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await pool.query(`DELETE FROM Gender WHERE idGender = ${id}`)
      res.status(200).send({ message: "OK!" })

    } catch (err) {
      res.status(404).send({"erro": err.message});
    }
  }

}

export default new GenderController();