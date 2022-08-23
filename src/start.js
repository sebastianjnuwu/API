// Hello World 
import express from 'express';
import colors from 'colors';
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Working!' }));

app.listen(8080, () => 
  console.log(colors.brightGreen('[ Info ] ') + 'Web server bound on port: 8080') 
);