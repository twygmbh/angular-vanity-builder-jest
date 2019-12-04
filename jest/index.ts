import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { runCLI } from 'jest';

interface Options extends JsonObject {
  jestConfig: string;
}

export default createBuilder<Options>((_options, context) => {
  return new Promise<BuilderOutput>(resolve => {
    console.log(_options);
    console.log(context);

    if (context.target && context.target.project) {
      return runCLI({} as any, [
        `${context.workspaceRoot}/projects/${context.target.project}`
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
