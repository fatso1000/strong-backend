import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../../database/models/User";
import UserRepo from "../../../database/repository/UserRepo";

export default class Repo {
  public static async signup(req: Request, res: Response, next: NextFunction) {
    const user = await UserRepo.findByEmail(req.body.email);
    if (user) throw new Error("User already registered");

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const { user: createdUser } = await UserRepo.create({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    } as User);

    res.status(200).json({ message: "User created Succesfully" });
  }
}
