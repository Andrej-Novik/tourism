"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Config from './config'
const database_1 = __importDefault(require("./database"));
class Repository {
    constructor() {
        this.connect = async () => {
            await this.db.connector.createConnection();
        };
        //this.config = Config
        this.db = database_1.default;
    }
}
exports.default = new Repository();
