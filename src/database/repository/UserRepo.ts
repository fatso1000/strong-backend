import User, { UserModel } from "../models/User";
import { Types } from "mongoose";

export default class UserRepo {
  public static findByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email })
      .select("+email +password +rol")
      .lean<User>()
      .exec();
  }

  public static async create(user: User): Promise<{ user: User }> {
    const now = new Date();

    user.role = "user";
    user.createdAt = user.updatedAt = now;
    const createdUser = await UserModel.create(user);

    // @ts-ignore
    return { user: createdUser.toObject() };
  }
}
