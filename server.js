const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const letras = [
  { letra: "A", palabra: "Abeja" },
  { letra: "B", palabra: "Barco" },
  { letra: "C", palabra: "Casa" }
];

app.get("/api/letras", (req, res) => {
  res.json(letras);
});

app.post("/api/respuesta", (req, res) => {
  const { letra, respuesta } = req.body;

  const correcta = letras.find(l => l.letra === letra);

  if (correcta && correcta.palabra.toLowerCase().startsWith(respuesta.toLowerCase())) {
    res.json({ mensaje: "¡Correcto! ⭐" });
  } else {
    res.json({ mensaje: "Intenta de nuevo 🔁" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});