// Hello World 
import express from 'express';
import colors from 'colors';
const app = express();

app.get('/', function(req, res): void {
        res.send('hello world');
});

app.listen(8080, () => {
  console.log(colors.green('[ Info ] ') + 'Web serve: connected to port 8080');
});