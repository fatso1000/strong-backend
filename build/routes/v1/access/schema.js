"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.default = {
    userCredential: joi_1.default.object().keys({
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().required().min(6),
    }),
    signup: joi_1.default.object().keys({
        name: joi_1.default.string().required().min(3),
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().required().min(6),
    }),
};
//# sourceMappingURL=schema.js.map