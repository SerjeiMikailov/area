"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home', {
        showlist: [
            { title: 'P1', price: 15 },
            { title: 'P2', price: 90 }
        ]
    });
});
router.get('/contact', (req, res) => {
    res.render('contact');
});
router.get('/contact/about', (req, res) => {
    res.render('about.mustache');
});
router.get('/name', (req, res) => {
    let nome = req.query.nome;
    res.render('name.mustache');
});
exports.default = router;
