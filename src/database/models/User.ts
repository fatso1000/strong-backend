import { model, Schema, Document } from "mongoose";
// import ROLE from "./Role"

export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";

export default interface User extends Document {
  name?: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      trim: true,
      select: false,
    },
    password: {
      type: Schema.Types.String,
      select: false,
    },
    role: {
      type: Schema.Types.String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      select: false,
    },
    updatedAt: {
      type: Date,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
