import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { Operations } from '@core/model/operation';
import { DataSectionItem } from '@core/components/data-section/data-section.component';
import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>.service';

@Component({
  selector: 'dbs-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

  data: any; // TODO type
  actionLinks$: Observable<Operations>;
  itemsLeft: DataSectionItem[];
  itemsRight: DataSectionItem[];

  constructor(private readonly service: <%= classify(name) %>Service) {}

  toggleHistory(tabIndex: number): void {
  }

  ngOnInit(): void {
    this.service.get<%= classify(name) %>()
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.data = data;
        if (data) {
          this.actionLinks$ = this.service.getActionLinks(data.actions);
          this.configureSections(data);
        }
      });
  }

  ngOnDestroy(): void {}

  private configureSections(data: any): void { // TODO type
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
