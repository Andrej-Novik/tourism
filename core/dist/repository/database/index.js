"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = __importDefault(require("./connector"));
const object_1 = __importDefault(require("./object"));
class DB {
    constructor() {
        this.connector = connector_1.default;
        this.objects = object_1.default;
    }
}
exports.default = new DB();
