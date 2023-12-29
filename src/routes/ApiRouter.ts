import express from "express";
import container from "../inversify/InfersifyConfig";
import {Database} from "../database/Database";

const apiRouter = express.Router();
const databaseInstance = container.get<Database>(Database).getDb();

apiRouter.get('/getClinics', async (req, res) => {
    try {
        const result = await databaseInstance.query('SELECT * FROM clinics');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

apiRouter.get('/getMLaboratories', async (req, res) => {
    try {
        const result = await databaseInstance.query('SELECT * FROM laboratories');
        console.log(result)
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

apiRouter.get('/getMedics', async (req, res) => {
    try {
        const result = await databaseInstance.query('SELECT * FROM medics');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

apiRouter.get('/getTests', async (req, res) => {
    try {
        const result = await databaseInstance.query('SELECT * FROM tests');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


export default apiRouter