"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const panel_1 = __importDefault(require("./routes/panel"));
const server = (0, express_1.default)();
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(index_1.default);
server.use('/panel', (panel_1.default));
server.use((req, res) => {
    res.status(404).send('Error 404 - Page not found');
});
server.listen(1919);
