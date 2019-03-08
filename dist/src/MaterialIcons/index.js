"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./setup");
const components_1 = __importDefault(require("./components"));
const core_1 = require("@bluebase/core");
exports.default = core_1.createPlugin({
    key: 'vector-icons-material-icons',
    name: 'VectorIconsMaterialIcon',
    components: {
        Icon: components_1.default
    }
});
//# sourceMappingURL=index.js.map