import pool from '../config/conn';
import Constants from '../utils/Constants';

export default class AlbumRepository {
    /**
     * retorna todos os albuns
     */
    static async findAll() {
        try {
            //TODO: Ajustar query para como estava antes.
            const result = await pool.query("SELECT al.idalbum album, al.name,a.name artist, g.name gender, al.year FROM album as al join artist as a on al.idartist = a.idartist join gender as g on al.idgender = g.idgender");
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
            const result = await pool.query("INSERT INTO album(idartist, idgender, name, year) VALUES($1, $2, $3, $4) RETURNING *", 
                                            [idartist, idgender, name, year])
            return result.rows[0];
        
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
            const result = await pool.query(`SELECT al.idalbum album, al.name,a.name artist, g.name gender, al.year FROM album as al join artist as a on al.idartist = a.idartist join gender as g on al.idgender = g.idgender WHERE al.idalbum = ${id}`);
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
            const result = await pool.query("SELECT al.name,a.name artist, g.name gender, al.year FROM album as al join artist as a on al.idartist = a.idartist join gender as g on al.idgender = g.idgender WHERE al.name = $1", [name]);
            if (result.rows.length > 0) {
                return result.rows[0];
            }
            throw new Error(Constants.NAME_NOT_FOUND);
        } catch(e) {
            throw e;
        }
    }

    /**
     * Delete o registro com base no id
     * @param {* inteiro} id 
     */
    static async findOneAndDelete(id) {
        try {
            const result = await pool.query(`DELETE FROM album WHERE idalbum = ${id} RETURNING *`);
            
            return result.rows[0];
        } catch(e) {
            throw e;
        }
    }

        /**
     * Atualiza um album
     * @param {* inteiro} idalbum
     * @param {* inteiro} idartist 
     * @param {* inteiro} idgender 
     * @param {* string} name 
     * @param {* inteiro} year 
     */
    static async findOneAndUpdate(idalbum, idartist, idgender, name, year) {
        try {
            const result = await pool.query("UPDATE album SET idartist = $1, idgender = $2, name = $3, year = $4 where idalbum = $5 RETURNING *", 
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