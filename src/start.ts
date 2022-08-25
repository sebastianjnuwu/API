// Hello World 
import { config } from 'dotenv';
import express from 'express';
import colors from 'colors';
import ip from 'ip';
const app = express();

app.get('/', function(req, res): void {
    res.send('hello world');
});

app.listen(process.env.PORT, () => {
  console.log(colors.green('[ Info ] ') + `Web serve: connected: ${ip.address()}:${process.env.PORT}`);
});