"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.adminSchema = joi_1.default.object({
    firstname: joi_1.default.string().alphanum().trim(),
    lastname: joi_1.default.string().alphanum().trim(),
});
//# sourceMappingURL=validation.js.map