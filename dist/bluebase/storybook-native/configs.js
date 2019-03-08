"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge = require('deepmerge');
/**
 * Add any modifications to the platform specific configs here.
 */
exports.default = (input) => {
    return deepmerge(input, {
        // app.json is generated from manifest
        manifest: {
            name: 'BlueBase Storybook Native',
            slug: 'bluebase-storybook-native',
        }
    });
};
//# sourceMappingURL=configs.js.map