"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const jest_1 = require("jest");
exports.default = architect_1.createBuilder((_options, context) => {
    return new Promise(resolve => {
        if (context.target && context.target.project) {
            return jest_1.runCLI({}, [
                `${context.workspaceRoot}/projects/${context.target.project}/jest.config.js`
            ])
                .then(() => {
                return resolve({ success: true });
            })
                .catch(error => {
                context.logger.error(error);
                resolve({ success: false });
            });
        }
    });
});
//# sourceMappingURL=index.js.map