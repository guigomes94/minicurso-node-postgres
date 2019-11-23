import ArtistModel from '../repository/ArtistRepository';

class ArtistController {
  async index(req, res) {

    try {
      const result = await ArtistModel.findAll();
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistModel.findOne(id);
      return res.json(result);
    } catch (e) {
      return res.status(404).json({message: e.message});
    }
  }

  async store(req, res) {
    const { name } = req.body;

    try {
      const result = await ArtistModel.create(name);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }

  }


  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const result = await ArtistModel.findOneAndUpdate(id, name);
      return res.json(result);
    }  catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistModel.findOneAndDelete(id);
      return res.json(result);
    } catch(e) {
      return res.status(404).json({message: e.message});
    }
  }

}

export default new ArtistController();