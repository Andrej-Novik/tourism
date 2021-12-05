"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../../models/dbm/object");
const connector_1 = __importDefault(require("./connector"));
class ObjectRepository {
    constructor() {
        this.getList = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObject = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).findOne({ where: { id } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.createObject = async (img, name, country, text, rate) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).save({ img, name, country, text, rate }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.deleteObject = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).delete(id));
                return { value: !!response.affected };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.editObject = async (id, rate) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).update(id, { rate }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObjectByName = async (name) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).findOne({ where: { name } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObjectsByQuery = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        // getUser = async (id: string) => {
        //   try {
        //     const response = await DBConnector.connector?.getRepository(User);
        //     //.find(id)
        //     return { value: response };
        //   } catch (e) {
        //     return { error: e };
        //   }
        // };
        // getUserByFirstName = async (firstName: string) => {
        //   try {
        //     const response = await DBConnector.connector
        //       ?.getRepository(User)
        //       .findOne({ where: { firstName } });
        //     return { value: response };
        //   } catch (e) {
        //     return { error: e };
        //   }
        // };
        // editUser = async (id: string, firstName: string, lastName: string) => {
        //   try {
        //     const response = await DBConnector.connector
        //       ?.getRepository(User)
        //       .update(id, { firstName, lastName });
        //     return { value: response };
        //   } catch (e) {
        //     return { error: e };
        //   }
        // };
        // deleteUser = async (id: string) => {
        //   try {
        //     const response = await DBConnector.connector
        //       ?.getRepository(User)
        //       .delete(id);
        //     return { value: !!response.affected };
        //   } catch (e) {
        //     return { error: e };
        //   }
        // };
    }
}
exports.default = new ObjectRepository();
