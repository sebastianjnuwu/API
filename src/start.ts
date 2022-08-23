// Hello World 
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import express from 'express';
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Working!' }));

app.listen(8080, () => {
  console.log('[ Info ] Web online!')
});