"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const setupServer_1 = require("./setupServer");
class Application {
    initialize() {
        const app = (0, express_1.default)();
        const server = new setupServer_1.ChattyServer(app);
        server.start;
    }
}
const application = new Application();
application.initialize();
//# sourceMappingURL=app.js.map