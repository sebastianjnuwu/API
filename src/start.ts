import connection from './database/connection';
import { config } from 'dotenv';
import express from 'express';
import colors from 'colors';
import ip from 'ip';
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(colors.green('[ Info ] ') + `Web serve connected: ${ip.address()}:${process.env.PORT}`);
});

export default connection;