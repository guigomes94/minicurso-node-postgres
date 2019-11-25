<<<<<<< HEAD
import MusicRepository from "../repositorys/MusicRepository";
=======
import MusicRepository from '../repository/MusicRepository';

>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9

class MusicController {
  async index(req, res) {

    try {
      const result = await MusicRepository.findAll();
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
      const result = await MusicRepository.findOneById(id);
      res.status(200).send(result);

    } catch (err) {
      if (err.message != "ID NOT FOUND!") {
        res.status(400).send({ "message": err.message });
      } else {
        res.status(404).send({ "message": err.message });
      }
      
=======
      const result = await MusicRepository.findByid(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }

  }

  async store(req, res) {
    const { idalb, track, name, time } = req.body;
    
    try {
      const result = await MusicRepository.create(idalb, track, name, time);
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
    const { idalb, track, name, time } = req.body;

    try {
<<<<<<< HEAD
      const result = await MusicRepository.findOneAndUpdate(id, idalb, track, name, time);
      res.status(200).send({"message": result});
      
    } catch (err) {
      res.status(404).send({ "message": err.message });
=======
      const result = await MusicRepository.findOneAndUpdate(id, idalb, track,name, time)
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
>>>>>>> a054dc7fb596e5855cab63d0c370d13edaad9bc9
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const result = await MusicRepository.findOneAndDelete(id);
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

export default new MusicController();