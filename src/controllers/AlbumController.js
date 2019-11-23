import AlbumRepository from '../repository/AlbumRepository';

class AlbumController {
  async index(req, res) {
    
    try {
      const result = await AlbumRepository.findAll();
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
    
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await AlbumRepository.findById(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

  async store(req, res) {
    const { idart, idgd, name, year } = req.body;

    try{
      const result = await AlbumRepository.create(idart, idgd, name, year);
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
    }

  }


  async update(req, res) {
    const { id } = req.params;
    const { idart, idgd, name, year } = req.body;

    try {
      const result = await AlbumRepository.findOneAndUpdate(id, idart, idgd, name, year);
      return res.json(result);
    } catch(e) {
      return res.status(400).json({message: e.message});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await AlbumRepository.findOneAndDelete(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

}

export default new AlbumController();