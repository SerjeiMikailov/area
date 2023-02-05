"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeCont = void 0;
const homeCont = (req, res) => {
    res.render('home', {
        showlist: [
            { title: 'P1', price: 15 },
            { title: 'P2', price: 90 }
        ]
    });
};
exports.homeCont = homeCont;
