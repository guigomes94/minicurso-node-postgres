import pool from '../config/conn';
import ArtistModel from '../models/ArtistModel';

class ArtistController {
  async index(req, res) {

    try {
      const result = await ArtistModel.findAll();
      return res.json(result);
    } catch(e) {
      return res.json({message: e.message});
    }

    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistModel.findOne(id);
      return res.json(result);
    } catch (e) {
      return res.json({message: e.message});
    }

    // try {
    //   const result = await pool.query(`SELECT * FROM artist WHERE idartist = ${id}`);
    //   res.status(200).send(result.rows);

    // } catch (err) {
    //   res.status(400).send({ "erro": err.message });
    // }
  }

  async store(req, res) {
    const { name } = req.body;

    try {
      const result = await ArtistModel.create(name);
      return res.json(result);
    } catch(e) {
      return res.json({message: e.message});
    }

  }


  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const result = await ArtistModel.findOneAndUpdate(id, name);
      return res.json(result);
    }  catch(e) {
      return res.json({message: e.message});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistModel.findAndDelete(id);
      return res.json(result);
    } catch(e) {
      return res.json({message: e.message});
    }
  }

}

export default new ArtistController();