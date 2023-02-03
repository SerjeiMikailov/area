"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Panel home');
});
router.get('/panelhome', (req, res) => {
    res.send('Details');
});
router.get('/panelhome/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Slug ${slug}`);
});
exports.default = router;
