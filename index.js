import express from 'express';


const app = express()
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Is listening to http://localhost:${port}`)
})










import { testApi } from './test.js';
app.get('/test', testApi)