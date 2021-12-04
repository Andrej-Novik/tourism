"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objectsService_1 = __importDefault(require("./objectsService"));
class UseCases {
    constructor() {
        this.ObjectsService = objectsService_1.default;
    }
}
exports.default = new UseCases();
