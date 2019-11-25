import pool from "../config/conn";
import Constants from "../util/Constants";

class ArtistRepository {
  async findAll() {
    try {
      const result = await pool.query("SELECT * FROM artist");
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  async findOneById(id) {
    try {
      const result = await pool.query(
        `SELECT * FROM artist WHERE idartist = ${id}`
      );
      if (result.rows.length > 0) {
        return result.rows;
      } else {
        throw new Error(Constants.ID_NOT_FOUND);
      }
    } catch (err) {
      throw err;
    }
  }

  async create(name) {
    try {
      let result = await pool.query(`INSERT INTO artist 
      VALUES(nextval('artist_idartist_seq'),'${name}')`);
      if (result) {
        result = Constants.CREATED;
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async findOneAndUpdate(id, name) {
    try {
      let result = await pool.query(`UPDATE artist SET name = '${name}' 
      WHERE idartist = ${id}`);
      if (result) {
        result = Constants.UPDATED;
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async findOneAndDelete(id) {
    try {
      let result = await pool.query(
        `DELETE FROM artist WHERE idartist = ${id}`
      );
      if (result) {
        result = Constants.REMOVED;
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
}

export default new ArtistRepository();
