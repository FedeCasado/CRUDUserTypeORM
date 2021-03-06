"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUsers = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getRepository)(User_1.User).find();
    return res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getRepository)(User_1.User).findOne(req.params.id);
    return res.json(users);
});
exports.getUser = getUser;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = (0, typeorm_1.getRepository)(User_1.User).create(req.body);
    const results = yield (0, typeorm_1.getRepository)(User_1.User).save(newUser);
    return res.json(results);
});
exports.createUsers = createUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, typeorm_1.getRepository)(User_1.User).findOne(req.params.id);
    if (user) {
        (0, typeorm_1.getRepository)(User_1.User).merge(user, req.body);
        const results = yield (0, typeorm_1.getRepository)(User_1.User).save(user);
        return res.json(results);
    }
    return res.status(404).json({
        msg: "No se encuentra el usuario"
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getRepository)(User_1.User).delete(req.params.id);
    return res.json(users);
});
exports.deleteUser = deleteUser;
