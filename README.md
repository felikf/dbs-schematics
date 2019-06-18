# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### My notes
npm run build:watch

From angular sandbox:
schematics ../dbs-schematics/src/collection.json:dbs-all test --debug=false

schematics --list-schematics @schematics/angular:
schematics --list-schematics @angular/material:

schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-service views/cards/card-tokens/services/CardTokens CARD_TOKENS --debug=false

schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-service views/cards/card-tokens/services/CardTokens CARD_TOKENS --debug=false
schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-error-configuration views/cards/CardTokens CARD_TOKENS --debug=false

schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-error-configuration views/cards/CardTokens CARD_TOKENS --debug=false
schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-error-configuration views/cards/CardTokens CARD_TOKENS --debug=false
schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-module views/cards/CardTokens CARD_TOKENS --debug=false

schematics ../../../github/schematics/dbs-schematics/src/collection.json:dbs-module views/cards/CardTokens CARD_TOKENS --debug=false
 
ng g ../dbs-schematics/src/collection.json:dbs-all benefits BENEFITS

#### Build and pack
npm run build
npm pack

#### Install
npm i --no-save /f/github/schematics/dbs-schematics/dbs-schematics-0.0.1.tgz

####Use
ng g @dbs/schematics:dbs-all test TEST --path=src/app/views/_pension
 
### Resources
https://github.com/BottleRocketStudios/ng-momentum/blob/master/src/service/index.ts#L65
https://www.youtube.com/watch?v=M5YSPas3qFo
https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4
