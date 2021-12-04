"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const delivery_1 = __importDefault(require("./delivery"));
const repository_1 = __importDefault(require("./repository"));
async function main() {
    await repository_1.default.connect();
    await delivery_1.default.listen(4000, () => console.log("server start in 4000"));
}
main();
