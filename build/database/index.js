"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};
mongoose_1.default
    .connect(config_1.URI, options)
    .then(() => {
    console.info("MONGOOSE CONNECTION DONE");
})
    .catch((e) => {
    console.info("MONGOOSE CONNECTION ERROR");
    console.error(e);
});
//   CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on("connected", () => {
    console.info("Mongoose default connection open to " + config_1.URI);
});
// If the connection throws an error
mongoose_1.default.connection.on("error", (err) => {
    console.error("Mongoose default connection error: " + err);
});
// When the connection is disconnected
mongoose_1.default.connection.on("disconnected", () => {
    console.info("Mongoose default connection disconnected");
});
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose_1.default.connection.close(() => {
        console.info("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
//# sourceMappingURL=index.js.map