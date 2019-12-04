import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { runCLI } from 'jest';

interface Options extends JsonObject {
  watch: boolean;
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(resolve => {
    if (context.target && context.target.project) {
      return runCLI({ watch: options.watch } as any, [
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
