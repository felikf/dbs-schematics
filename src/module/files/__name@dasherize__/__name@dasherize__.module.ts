import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ForFeatureModule } from '@app/forFeature.module';
import { ErrorService } from '@core/services/error/error.service';
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';
import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';

import { i18n } from './i18n/cz';
import { ERROR_MAPPING } from './error-configuration/error-configuration';

@NgModule({
  imports: [
    CommonModule,
    ForFeatureModule,
    TranslateModule.forChild(),
    <%= classify(name) %>RoutingModule
  ],
  providers: [<%= classify(name) %>Service],
  declarations: [
    <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module {
  constructor(
    private readonly translate: TranslateService, private readonly errorService: ErrorService) {
    translate.setTranslation('cz', i18n, true);
    errorService.addErrorMappings('<%= actionContext %>', ERROR_MAPPING);
  }
}
