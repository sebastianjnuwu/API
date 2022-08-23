// Hello World 
import express from 'express';
import colors from 'colors';
const app = express();

app.listen(8080, (req, res) =>
 console.log(colors.brightGreen(`[ Info ] `) + `Web server bound on port: 8080`) 
);