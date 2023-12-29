
import {injectable} from "inversify";
import {Pool} from "pg";

@injectable()
export class Database {
    private db: Pool;
    constructor(dbConfig : Pool) {
        this.db = dbConfig;
    }
    getDb() {
        return this.db
    }
    // Методы работы с базой данных
}

