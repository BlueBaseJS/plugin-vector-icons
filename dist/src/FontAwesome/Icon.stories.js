"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const core_1 = require("@bluebase/core");
const storybook_addon_1 = __importDefault(require("@bluebase/storybook-addon"));
const Icon = core_1.getComponent('Icon');
storybook_addon_1.default('FontAwesome', module)
    .add('FontAwesome', () => (react_1.default.createElement(Icon, { name: "rocket", size: 30, color: "#900" })));
//# sourceMappingURL=Icon.stories.js.map