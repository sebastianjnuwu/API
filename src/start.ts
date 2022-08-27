import express from 'express';
import colors from 'colors';
import ip from 'ip';
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({ KettraWorld: ip.address() });
});

app.listen(process.env.PORT, () => {
  console.log(colors.green('[ Info ] ') + `Web serve connected: ${ip.address()}:${process.env.PORT}`);
});    
