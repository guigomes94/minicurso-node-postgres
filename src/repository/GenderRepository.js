import pool from '../config/conn';
import Constants from '../utils/Constants';

export default class GenderRepository {
    static async findAll() {
        try {
            const result = await pool.query("SELECT * FROM gender");
            return result.rows;
        } catch(e) {
            throw e;
        }
    }

    static async create(name) {
        try {
            const result =  await pool.query("INSERT INTO gender(name) VALUES($1) RETURNING *", [name]);
            return result.rows.length > 0 ? result.rows[0] : {};
        } catch(e) {
            throw e;
        }
    }
    /**
     * Retorna o genero do id especificado
     * @param {* inteiro} id 
     */
    static async findById(id) {
        try {
            const result = await pool.query(`SELECT * FROM gender where idgender = ${id}`);
            if (result.rows.length > 0) {
                return result.rows[0];
            } else {
                throw new Error(Constants.ID_NOT_FOUND);
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * Recebe o nome de um genero e o retorna caso exista.
     * @param {* string} name 
     */
    static async findByName(name) {
        try {
            const result = await pool.query(`SELECT * FROM gender where name = ${name}`);
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                throw new Error("Name does not exist");
            }
        } catch (e) {
            throw e;
        }
    }
    /**
     * Encontra um genero pelo id e atualiza seu nome
     * @param {* inteiro} id 
     * @param {* string} name 
     */
    static async findOneAndUpdate(id, name) {
        try {
            const result = await pool.query("UPDATE gender SET name = $1 WHERE idgender = $2 RETURNING *", [name, id]);
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
            const result = await pool.query(`DELETE FROM gender WHERE idgender = ${id} RETURNING *`);
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