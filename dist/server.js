"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.listen(1919);
server.get('/', (req, res) => {
    res.send('kkkkkk');
});
server.get('/mainpage/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Coisa tal ${slug}`);
});
