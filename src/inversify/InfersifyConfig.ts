import 'reflect-metadata';
import {Container} from "inversify";
import {Database} from "../database/Database";
import {databaseConfig} from "../database/DatabaseConfig";

const container = new Container();
import 'reflect-metadata';

// Регистрация зависимости (Database) в контейнере
container.bind<Database>(Database).toDynamicValue((context) => {
    return new Database(databaseConfig);
}).inSingletonScope();
export default container;
