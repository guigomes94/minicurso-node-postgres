import pool from '../config/conn';
import Constants from '../utils/Constants';
export default class MusicRepository {
    /**
     * retorna todas as musicas
     */
    static async findAll() {
        try {
            const result = await pool.query("SELECT m.idmusic, m.name, al.name album, m.track, m.time FROM music as m join album as al on m.idalbum = al.idalbum");
            return result.rows;
        } catch(e) {
            throw e;
        }
    }

    /**
     *  retorna a musica do id passado
     * @param {* inteiro} id 
     */
    static async findByid(id) {
        try {
            const result = await pool.query(`SELECT m.idmusic, m.name, al.name album, m.track, m.time FROM music as m join album as al on m.idalbum = al.idalbum WHERE m.idmusic = ${id}`);
            if (result.rows.length > 0) {
                return result.rows[0];
            }

            throw new Error(Constants.ID_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

    /**
     * cria uma nova musica para um determinado album
     * @param {* inteiro} idalbum 
     * @param {* inteiro} track 
     * @param {* string} name 
     * @param {* string} time 
     */
    static async create(idalbum, track, name, time) {
        try {
            const result = await pool.query("INSERT INTO music(idalbum, track, name, time) VALUES($1, $2, $3, $4) RETURNING *", [idalbum, track, name, time]);
            return result.rows[0];
        } catch(e) {
            throw e;
        }
    }

    /**
     * Atualiza uma musica com base no seu id
     * @param {* inteiro} idmusic 
     * @param {* inteiro} idalbum 
     * @param {* inteiro} track 
     * @param {* string} name 
     * @param {* string} time 
     */
    static async findOneAndUpdate(idmusic, idalbum, track, name, time) {
        try {
            const result = await pool.query("UPDATE music SET idalbum = $1, track = $2, name = $3, time = $4 WHERE idmusic = $5 RETURNING *", [idalbum, track, name, time, idmusic]);
            if (result.rows.length > 0) {
                return result.rows[0];
            }

            throw new Error(Constants.ID_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

    static async findOneAndDelete(id) {
        try {
            const result = await pool.query(`DELETE FROM music WHERE idmusic = ${id} RETURNING *`);
            if (result.rows.length > 0) {
                return result.rows[0];
            }
            throw new Error(Constants.ID_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }
}