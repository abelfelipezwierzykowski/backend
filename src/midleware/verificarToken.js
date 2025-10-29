const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "chaveSuperSecreta";

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer token"

  if (!token) return res.status(401).json({ erro: "Token não fornecido" });

  jwt.verify(token, SECRET, (erro, usuario) => {
    if (erro) return res.status(403).json({ erro: "Token inválido" });
    req.usuario = usuario; // salva dados do usuário no request
    next();
  });
};
