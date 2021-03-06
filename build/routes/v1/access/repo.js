"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserRepo_1 = __importDefault(require("../../../database/repository/UserRepo"));
class Repo {
    static async signup(req, res, next) {
        const user = await UserRepo_1.default.findByEmail(req.body.email);
        if (user)
            throw new Error("User already registered");
        const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
        const { user: createdUser } = await UserRepo_1.default.create({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash,
        });
        res.status(200).json({ message: "User created Succesfully" });
    }
}
exports.default = Repo;
//# sourceMappingURL=repo.js.map