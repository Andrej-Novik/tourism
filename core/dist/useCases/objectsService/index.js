"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = __importDefault(require("../../repository/database/object"));
class ObjectsService {
    constructor() {
        this.getList = async () => {
            const { value, error } = await object_1.default.getList();
            if (error)
                return { error: error };
            return { value: value };
        };
        // getUser = async (id: string) => {
        //   const { value, error } = await UsersRepository.getUser(id);
        //   if (error) return { error: error };
        //   return { value: value };
        // };
        this.getObject = async (id) => {
            const { value, error } = await object_1.default.getObject(id);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.createObject = async (img, name, country, text, rate) => {
            const { value, error } = await object_1.default.createObject(img, name, country, text, rate);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.deleteObject = async (id) => {
            const { value, error } = await object_1.default.deleteObject(id);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.editObject = async (id, rate) => {
            const { value, error } = await object_1.default.editObject(id, rate);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getObjectByName = async (name) => {
            const { value, error } = await object_1.default.getObjectByName(name);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getObjectsByQuery = async () => {
            const { value, error } = await object_1.default.getObjectsByQuery();
            if (error)
                return { error: error };
            return { value: value };
        };
        // deleteUser = async (id: string) => {
        //   const { value, error } = await UsersRepository.deleteUser(id);
        //   if (error) return { error: error };
        //   return { value: value };
        // };
        // editUser = async (id: string, firstName: string, lastName: string) => {
        //   const { value, error } = await UsersRepository.editUser(
        //     id,
        //     firstName,
        //     lastName
        //   );
        //   if (error) return { error: error };
        //   return { value: value };
        // };
        // getUser = async (id: string) => {
        //   const { value, error } = await UsersRepository.getUser(id);
        //   if (error) return { error: error };
        //   return { value: value };
        // };
    }
}
exports.default = new ObjectsService();
