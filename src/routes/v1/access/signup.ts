import express, { Request } from "express";
import validator from "../../../helpers/validator";
import bcrypt from "bcrypt";
import crypto from "crypto";
import Repo from "./repo";
import schema from "./schema";

const router = express.Router();

router.post("/basic", validator(schema.signup), Repo.signup);

export default router;
