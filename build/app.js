"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import helmet from "helmet";
const nocache_1 = __importDefault(require("nocache"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const config_1 = require("./config");
require("./database");
const v1_1 = __importDefault(require("./routes/v1"));
// CATCH ERRORS
process.on("uncaughtException", (e) => {
    console.error(e);
});
const app = express_1.default();
var store = connect_mongodb_session_1.default(express_session_1.default);
const newStore = new store({
    uri: config_1.URI,
    collection: "sessions",
});
// CATCH ERRORS
newStore.on("error", (error) => {
    console.error(error);
});
app.use(express_1.default.urlencoded({ limit: "10mb", extended: false }));
app.use(express_1.default.json({ limit: "10mb" }));
app.use(cookie_parser_1.default());
app.use(nocache_1.default());
app.use(express_session_1.default({
    secret: ["MEIPIxrliz", "sU8EOaZlMf", "zG2bKraxVX"],
    name: "mine",
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24 * 4, // 1 week
    },
    store: newStore,
    resave: false,
    saveUninitialized: false,
}));
app.use(cors_1.default({
    origin: config_1.CORS_URL,
    optionsSuccessStatus: 200,
}));
// ROUTES
app.use("/v1", v1_1.default);
// TEST SESSION
// USE ON LOGIN
app.get("/session", (req, res) => {
    res.send({ session: req.session });
});
exports.default = app;
//# sourceMappingURL=app.js.map