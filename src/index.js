const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/usuarios' async (req, res) => {
  await TextDecoderStream;
});
app.listen(3000, () => {
  let data =  new Date();
  console.log(`Servidor rodando na PORT 3000 e está em execução desde: ${data.toLocaleString()}`);
});
