import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { AppState } from '@core/services/state/app.reducers';
import { BackendService } from '@core/services/backend/backend.service';
import { Operations } from '@core/model/operation';
import { ResolveActionLinksParameter } from '@core/services/state/action-links/action-links.service';
import { DeepLinkState } from '@core/services/state/deeplink/store/deep-link.reducers';
import { AppInfoState } from '@core/services/state/app-info/store/app-info.reducers';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(
    private readonly backend: BackendService,
    private readonly store: Store<AppState>) {}

  get<%= classify(name) %>(): Observable<any> {
    return this.backend.getProductData<any>(cgpId => `products/${cgpId}/<%= classify(name) %>`);
  }

  getActionLinks(actions: Operations): Observable<Operations> {
    return combineLatest([this.store.select('deepLink'), this.store.select('appInfo')])
      .pipe(
        map(([deepLink, appInfo]) => this.createReplacements(deepLink, appInfo)),
        mergeMap(replacements => of(actions.map(action => new ResolveActionLinksParameter(action.code, replacements))))
      );
}

  private createReplacements(deepLink: DeepLinkState, appInfo: AppInfoState): Map<string, string> {
      const menuDefinition = appInfo && appInfo.appInfo && appInfo.appInfo.menuDefinition;
    const owner = menuDefinition && menuDefinition.owner;
    const userDetail = menuDefinition && menuDefinition.userDetail;
    const branch = userDetail && userDetail.branch;

    return new Map<string, string>([
      ['User.Login', userDetail && userDetail.userName],
      ['Agreement.Number', menuDefinition && menuDefinition.agreement && menuDefinition.agreement.number],
      ['OnBehalfClient.Cluid', deepLink.deepLink.OnBehalfCLUID],
      ['Account.Owner.Cluid', owner && owner.id],
      ['User.OrgUnitId', branch && branch.code],
      ['User.DistributionChannel', userDetail && userDetail.distributionChannel]
    ]);
  }
}
