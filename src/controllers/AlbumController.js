import pool from '../config/conn';

class AlbumController {
  async index(req, res) {

    try {
      const result = await pool.query(`SELECT al.idalbum "id", a.name "artist",
      g.name "gender", al.name , al.year FROM artist a, gender g, album al
      WHERE a.idartist = al.idartist AND g.idgender = al.idgender;`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await pool.query(`SELECT al.idalbum "id", a.name "artist",
      g.name "gender", al.name , al.year FROM artist a, gender g, album al
      WHERE a.idartist = al.idartist AND g.idgender = al.idgender AND idalbum = ${id}`);
      res.status(200).send(result.rows);

    } catch (err) {
      res.status(400).send({ "erro": err.message });
    }
  }

  async store(req, res) {
    const { idart, idgd, name, year } = req.body;

    try {
      await pool.query(`INSERT INTO Album VALUES(nextval('Album_idAlbum_seq')
      ,${idart}, ${idgd},'${name}',${year})`);
      res.status(201).send({ message: "OK!" });
      
    } catch (err) {
      res.status(404).send({ "erro": err.message });
    }
  }


  async update(req, res) {
    const { id } = req.params;
    const { idart, idgd, name, year } = req.body;

    try {
      await pool.query(`UPDATE Album SET idartist = ${idart},
      idgender = ${idgd},
      name = '${name}',
      year = ${year} WHERE idAlbum = ${id}`);
      res.status(200).send({ message: "OK!" });

    } catch (err) {
      res.status(404).send({ "erro": err.message });
    } 
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await pool.query(`DELETE FROM Album WHERE idAlbum = ${id}`)
      res.status(200).send({ message: "OK!" })

    } catch (err) {
      res.status(404).send({"erro": err.message});
    }
  }

}

export default new AlbumController();