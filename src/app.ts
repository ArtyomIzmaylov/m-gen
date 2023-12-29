import container from "./inversify/InfersifyConfig";
import {Database} from "./database/Database";
import {QueryResult} from "pg";
import express from "express";
import apiRouter from "./routes/ApiRouter";
import mainRouter from "./routes/MainRouter";



const app = express()
app.use(express.json())
app.use('/', mainRouter)
app.use('/api', apiRouter)
async function startApp() {
    try {
        app.listen(process.env.APP_PORT || 8080, () => console.log('Server has been started'))
    }
    catch (error) {
        console.log(error)
    }
}


async function main() {
    const databaseInstance = container.get<Database>(Database).getDb();
    const result : QueryResult = await databaseInstance.query(`SELECT * FROM "test_result"`)
    console.log(result.rows)
}

startApp()