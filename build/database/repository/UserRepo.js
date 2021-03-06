"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserRepo {
    static findByEmail(email) {
        return User_1.UserModel.findOne({ email })
            .select("+email +password +rol")
            .lean()
            .exec();
    }
    static async create(user) {
        const now = new Date();
        user.role = "user";
        user.createdAt = user.updatedAt = now;
        const createdUser = await User_1.UserModel.create(user);
        // @ts-ignore
        return { user: createdUser.toObject() };
    }
}
exports.default = UserRepo;
//# sourceMappingURL=UserRepo.js.map