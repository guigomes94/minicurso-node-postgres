import pool from '../config/conn';
import Constants from '../utils/Constants';

export default class ArtistModel {
    /**
     * Retorna todos os artistas
     */
    static async findAll() {
        try {
            const result = await pool.query("SELECT * FROM artist");
            return result.rows;
        } catch(e) {
            throw e;
        }
    }

    /**
     * recebe um id e procura o artista correspondente
     * @param {* inteiro} id 
     */
    static async findById(id) {
        try {
            const result = await pool.query(`SELECT * FROM artist WHERE idartist = ${id}`);
            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error(Constants.ID_NOT_FOUND);
            }
        } catch(e) {
            throw e;
        }
    }
    /**
     * recebe um name e procura o artista correspondente
     * @param {* strnameing} id 
     */
    static async findByName(name) {
        try {
            const result = await pool.query(`SELECT * FROM artist WHERE name = ${name}`);
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error(Constants.NAME_NOT_FOUND);
            }
        } catch(e) {
            throw e;
        }
    }

    /**
     * Cria um novo artista no banco
     * @param {* string} name 
     */
    static async create(name) {
        try {
            const result = await pool.query("INSERT INTO artist(name) VALUES($1) RETURNING *", [name]);
            return result.rows.length > 0 ? result.rows[0] : {};
        } catch(e) {
            throw e;
        }
    }

    /**
     * Encontra um artista pelo id e atualiza seu nome
     * @param {* inteiro} id 
     * @param {* string} name 
     */
    static async findOneAndUpdate(id, name) {
        try {
            const result = await pool.query("UPDATE artist SET name = $1 WHERE idartist = $2 RETURNING *", [name, id]);
            if (result.rows.length > 0){
                return result.rows[0]
            } else {
                throw new Error(Constants.ID_NOT_FOUND);
            }
        } catch(e) {
            throw e;
        }
    }

    /**
     * Delete um registro do banco
     * @param {* inteiro} id 
     */
    static async findOneAndDelete(id) {
        try {
            const result = await pool.query(`DELETE FROM artist WHERE idartist = ${id} RETURNING *`);
            if (result.rows.length > 0){
                return result.rows[0]
            } else {
                throw new Error(Constants.ID_NOT_FOUND);
            }
        } catch(e) {
            throw e;
        }
    }
}