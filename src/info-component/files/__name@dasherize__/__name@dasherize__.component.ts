import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Operations } from '@core/model/operation';
import { DataSectionItem } from '@core/components/data-section/data-section.component';
import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>.service';

@Component({
  selector: 'dbs-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

  actionLinks$: Observable<Operations>;
  itemsLeft: DataSectionItem[];
  itemsRight: DataSectionItem[];

  constructor(private readonly service: <%= classify(name) %>Service) {}

  toggleHistory(tabIndex: number): void {
  }

  ngOnInit(): void {
    this.actionLinks$ = this.service.getActionLinks([{ code: 'ACCOUNT_DETAIL', active: true, nonRealizableReason: '' }]);
    this.configureSections({});
  }

  ngOnDestroy(): void {}

  private configureSections(data: any): void {
    if (data) {
      this.itemsLeft = [
        { label: 'Left', value: 'Left Data' }
      ];

      this.itemsRight = [
        { label: 'Right', value: 'Right Data' }
      ];
    }
  }

}
