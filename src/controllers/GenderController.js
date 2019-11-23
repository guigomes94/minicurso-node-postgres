import GenderRepository from '../repository/GenderRepository';

class GenderController {
  async index(req, res) {

    try {
      const result = await GenderRepository.findAll();
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
    
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await GenderRepository.findById(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

  async store(req, res) {
    const { name } = req.body;
    try {
      const result = await GenderRepository.create(name);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }

  }


  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const result = await GenderRepository.findOneAndUpdate(id, name);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await GenderRepository.findOneAndDelete(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

}

export default new GenderController();