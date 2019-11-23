import MusicRepository from '../repository/MusicRepository';


class MusicController {
  async index(req, res) {

    try {
      const result = await MusicRepository.findAll();
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
    
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await MusicRepository.findByid(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }

  }

  async store(req, res) {
    const { idalb, track, name, time } = req.body;
    
    try {
      const result = await MusicRepository.create(idalb, track, name, time);
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { idalb, track, name, time } = req.body;

    try {
      const result = await MusicRepository.findOneAndUpdate(id, idalb, track,name, time)
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const result = await MusicRepository.findOneAndDelete(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

}

export default new MusicController();