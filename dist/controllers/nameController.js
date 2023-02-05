"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginManager = void 0;
const loginManager = (req, res) => {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let idade = req.body.idade;
    res.render('name.mustache', {
        nome,
        sobrenome,
        idade
    });
};
exports.loginManager = loginManager;
