import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@core/services/state/app.reducers';
import { BackendService } from '@core/services/backend/backend.service';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(
    private readonly backend: BackendService,
    private readonly store: Store<AppState>) {}

  get<%= classify(name) %>(): Observable<<%= classify(name) %>Response> {
    return this.backend.getProductData<<%= classify(name) %>Response>(cgpId => `products/${cgpId}/<%= classify(name) %>`);
  }
}
