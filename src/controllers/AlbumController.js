<<<<<<< HEAD
import AlbumRepository from "../repositorys/AlbumRepository";
=======
import AlbumRepository from '../repository/AlbumRepository';
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9

class AlbumController {
  async index(req, res) {
    
    try {
      const result = await AlbumRepository.findAll();
<<<<<<< HEAD
      res.status(200).send(result);

    } catch (err) {
      res.status(400).send({ "message": err.message });
=======
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
<<<<<<< HEAD
      const result = await AlbumRepository.findOneById(id);
      res.status(200).send(result);

    } catch (err) {
      if (err.message != "ID NOT FOUND!") {
        res.status(400).send({ "message": err.message });
      } else {
        res.status(404).send({ "message": err.message });
      }
      
=======
      const result = await AlbumRepository.findById(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

  async store(req, res) {
    const { idart, idgd, name, year } = req.body;

<<<<<<< HEAD
    try {
      const result = await AlbumRepository.create(idart, idgd, name, year);
      res.status(201).send({"message": result});
      
    } catch (err) {
      res.status(404).send({ "message": err.message });
=======
    try{
      const result = await AlbumRepository.create(idart, idgd, name, year);
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }

  }

  async update(req, res) {
    const { id } = req.params;
    const { idart, idgd, name, year } = req.body;

    try {
      const result = await AlbumRepository.findOneAndUpdate(id, idart, idgd, name, year);
<<<<<<< HEAD
      res.status(200).send({"message": result});
      
    } catch (err) {
      res.status(404).send({ "message": err.message });
=======
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await AlbumRepository.findOneAndDelete(id);
<<<<<<< HEAD
      res.status(200).send({ message: result })

    } catch (err) {
      res.status(404).send({"message": err.message});
=======
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

}

export default new AlbumController();