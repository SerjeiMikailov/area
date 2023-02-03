"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('kkkkkk');
});
router.get('/mainpage/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Coisa tal ${slug}`);
});
exports.default = router;