import pool from '../config/conn';

class MusicController {
  async index(req, res) {

    try {
      const result = await pool.query(`SELECT m.idmusic, al.name "album", m.track,
      m.name, m.time FROM music m, album al WHERE m.idalbum = al.idalbum;`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await pool.query(`SELECT m.idmusic, al.name "album", m.track,
      m.name, m.time FROM music m, album al
      WHERE m.idalbum = al.idalbum AND idMusic = ${id}`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
  }

  async store(req, res) {
    const { idalb, track, name, time } = req.body;

    try {
      await pool.query(`INSERT INTO Music VALUES(nextval('Music_idMusic_seq')
      ,${idalb}, ${track},'${name}','${time}')`);
      res.status(201).send({ message: "OK!" });
      
    } catch (err) {
      res.status(404).send({ "erro": err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { idalb, track, name, time } = req.body;

    try {
      await pool.query(`UPDATE Music SET idalbum = ${idalb},
      track = ${track},
      name = '${name}',
      time = '${time}' WHERE idMusic = ${id}`);
      res.status(200).send({ message: "OK!" });

    } catch (err) {
      res.status(404).send({ "erro": err.message });
    } 
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await pool.query(`DELETE FROM Music WHERE idMusic = ${id}`)
      res.status(200).send({ message: "OK!" })

    } catch (err) {
      res.status(404).send({"erro": err.message});
    }
  }

}

export default new MusicController();