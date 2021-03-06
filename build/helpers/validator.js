"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (schema) => (req, res, next) => {
    try {
        const { error } = schema.validate(req["body"]);
        if (!error)
            return next();
        const { details } = error;
        const message = details.map(i => i.message.replace(/['"]+/g, '')).join(',');
        console.error(message);
        next(`ERROR!: ${error}`);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=validator.js.map