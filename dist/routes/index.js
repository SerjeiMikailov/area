"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/mainpage', (req, res) => {
    res.send('Main Page');
});
router.get('/mainpage/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Coisa tal ${slug}`);
});
exports.default = router;
