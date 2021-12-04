"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const useCases_1 = __importDefault(require("../../useCases"));
router.get("", async (req, res) => {
    const { value, error } = await useCases_1.default.ObjectsService.getList();
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
router.post("", async (req, res) => {
    const { value, error } = await useCases_1.default.ObjectsService.createObject(req.body.img, req.body.name, req.body.country, req.body.text, req.body.rate);
    if (error) {
        res.status(500).json(error || new Error("UC undefined error"));
        return;
    }
    res.status(200).json(value);
});
// router.delete("/:id", async (req, res) => {
//   const { value, error } = await UseCases.ObjectsService.deleteUser(
//     req.params.id
//   );
//   if (error) {
//     res.status(500).json(error || new Error("UC undefined error"));
//     return;
//   }
//   res.status(200).json(value);
// });
// router.patch("/:id", async (req, res) => {
//   const { value, error } = await UseCases.ObjectsService.editUser(
//     req.params.id,
//     req.body.firstName,
//     req.body.lastName
//   );
//   if (error) {
//     res.status(500).json(error || new Error("UC undefined error"));
//     return;
//   }
//   res.status(200).json(value);
// });
// router.get("/:id", async (req, res) => {
//   const { value, error } = await UseCases.ObjectsService.getUser(req.params.id);
//   if (error) {
//     res.status(500).json(error || new Error("UC undefined error"));
//     return;
//   }
//   res.status(200).json(value);
// });
exports.default = router;
