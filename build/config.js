"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URI = exports.DB = exports.CORS_URL = exports.PORT = void 0;
exports.PORT = 4040;
exports.CORS_URL = process.env.CORS_URL;
exports.DB = {
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
};
exports.URI = `mongodb+srv://${exports.DB.USER}:${encodeURIComponent(exports.DB.PASSWORD)}@cluster0.laqyg.mongodb.net/${exports.DB.NAME}?retryWrites=true&w=majority`;
//# sourceMappingURL=config.js.map