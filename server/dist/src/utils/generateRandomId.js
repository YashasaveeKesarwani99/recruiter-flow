"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomId = void 0;
const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
};
exports.generateRandomId = generateRandomId;
