import express, {Request, Response} from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
// import helmet from "helmet";
import nocache from "nocache";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import MongoDBStore from "connect-mongodb-session";
import { CORS_URL, URI } from "./config";
import "./database";
import routesV1 from "./routes/v1";

// CATCH ERRORS
process.on("uncaughtException", (e) => {
  console.error(e);
});

const app = express();
var store = MongoDBStore(session);
const newStore = new store({
  uri: URI,
  collection: "sessions",
});

// CATCH ERRORS
newStore.on("error", (error) => {
  console.error(error);
});

app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(nocache());
app.use(
  session({
    secret: ["MEIPIxrliz", "sU8EOaZlMf", "zG2bKraxVX"],
    name: "mine",
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 1000 * 60 * 60 * 24 * 4, // 1 week
    },
    store: newStore,
    resave: false, // if not false, save the session on the session store
    saveUninitialized: false,
  })
);
app.use(
  cors({
    origin: CORS_URL,
    optionsSuccessStatus: 200,
  })
);

// ROUTES
app.use("/v1", routesV1);

// TEST SESSION
// USE ON LOGIN
app.get("/session", (req: Request, res: Response) => {
  res.send({session: req.session});
});

export default app;
