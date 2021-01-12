const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

module.exports = {
  
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' } ),
  setupFilesAfterEnv: ["jest-extended"],
  verbose: true,
  
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  
  reporters: [
    "default",
    ["jest-html-reporters", {
        "publicPath": "./html-report",
        "filename": "report.html"
    }],
    [ "jest-junit", { 
      "suiteName": "jest tests",
      "outputDirectory": "junit-report",
      "outputName": "junit.xml",
      "uniqueOutputName": "false",
      "classNameTemplate": "{classname}-{title}",
      "titleTemplate": "{classname}-{title}",
      "ancestorSeparator": " › ",
      "usePathForSuiteName": "true" 
    }]
  ],
}