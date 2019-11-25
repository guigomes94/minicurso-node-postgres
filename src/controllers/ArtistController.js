<<<<<<< HEAD
import ArtistRepository from "../repositorys/ArtistRepository";
=======
import ArtistRepository from '../repository/ArtistRepository';
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9

class ArtistController {
  async index(req, res) {

    try {
      const result = await ArtistRepository.findAll();
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
      const result = await ArtistRepository.findOneById(id);
      res.status(200).send(result);

    } catch (err) {
      if (err.message != "ID NOT FOUND!") {
        res.status(400).send({ "message": err.message });
      } else {
        res.status(404).send({ "message": err.message });
      }
      
=======
      const result = await ArtistRepository.findOne(id);
      return res.json(result);
    } catch (e) {
      return res.status(404).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

  async store(req, res) {
    const { name } = req.body;

    try {
      const result = await ArtistRepository.create(name);
<<<<<<< HEAD
      res.status(201).send({"message": result});
      
    } catch (err) {
      res.status(404).send({ "message": err.message });
=======
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }

  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const result = await ArtistRepository.findOneAndUpdate(id, name);
<<<<<<< HEAD
      res.status(200).send({"message": result});
      
    } catch (err) {
      res.status(404).send({ "message": err.message });
=======
      return res.json(result);
    }  catch(e) {
      return res.status(400).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistRepository.findOneAndDelete(id);
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

export default new ArtistController();