import pool from '../config/conn';
import Constants from '../utils/Constants';

export default class AlbumRepository {
    /**
     * retorna todos os albuns
     */
    static async findAll() {
        try {
            //TODO: Ajustar query para como estava antes.
            const result = await pool.query("SELECT * FROM album");
            return result.rows;
        } catch(e) {
            throw e;
        }
    }

    /**
     * Cria um novo album
     * @param {* inteiro} idartist 
     * @param {* inteiro} idgender 
     * @param {* string} name 
     * @param {* inteiro} year 
     */
    static async create(idartist, idgender, name, year) {
        try {
            const result = await pool.query("INSERT INTO album(idartist, idgender, name, year) VALUES($1, $2, $3, $4)", 
                                            [idartist, idgender, name, year])
            return result.rows.length > 0 ? result.rows[0] : {};
        
        } catch(e) {
            throw e;
        }
    }

    /**
     * Retorna um album dado o id passado
     * @param {* inteiro} id 
     */
    static async findById(id) {
        try {
            const result = await pool.query(`SELECT * FROM album WHERE idalbum = ${id}`);
            if (result.rows.length > 0) {
                return result.rows[0];
            }
            throw new Error(Constants.ID_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

    /**
     * Retorna um registro do banco baseado no nome.
     * @param {* string} name 
     */
    static async findByName(name) {
        try {
            const result = await pool.query("SELECT * FROM album where name = $1", [name]);
            if (result.rows.length > 0) {
                return result.rows[0];
            }
            throw new Error(Constants.NAME_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

    /**
     * Acha um registro e atualiza o nome
     * @param {* inteiro} id 
     * @param {* string} name 
     */
    static async findOneAndDelete(id, name) {
        try {
            const result = await pool.query("UPDATE FROM album SET name = $1 WHERE idalbum = $2 RETURNING *", [name, id]);
            if (result.rows.length > 0) {
                return result.rows[0];
            }
            throw new Error(Constants.ID_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

        /**
     * Atualiza um album
     * @param {* intiero} idalbum
     * @param {* inteiro} idartist 
     * @param {* inteiro} idgender 
     * @param {* string} name 
     * @param {* inteiro} year 
     */
    static async findOneAndUpdate(idalbum, idartist, idgender, name, year) {
        try {
            const result = await pool.query("UPDATE album SET idartist = $1, idgender = $2, name = $3, year = $4 where idalbum = $5", 
                                            [idartist, idgender, name, year, idalbum])
            if (result.rows.length > 0) {
                return result.rows[0];
            }

            throw new Error(Constants.ID_NOT_FOUND);  
        } catch(e) {
            throw e;
        }
    }

    
}