import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
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
  dataLoaded = false;
  isError = false;
  dataSource: MatTableDataSource<any>; // TODO type
  displayedColumns = ['arrow', 'name'];
  actionLinks$: Observable<Operations>;

  constructor(private readonly service: <%= classify(name) %>Service) {} // TODO configure service with { swallowError: false }

  toggleHistory(tabIndex: number): void {
  }

  ngOnInit(): void {
    this.service.get<%= classify(name) %>()
      .pipe(untilDestroyed(this))
      .subscribe(
        data => {
          this.data = data;
          this.dataLoaded = true;
          if (data) {
            this.actionLinks$ = this.service.getActionLinks(data.actions);
          }
          if (data && data.array) {
            this.dataSource = new MatTableDataSource<any>(data.array); // TODO type
          }
        },
        () => {
          this.dataLoaded = true;
          this.isError = true;
        }
      );
  }

  ngOnDestroy(): void {}

  configureLeftSection(row: any): DataSectionItem[] { // TODO type
    if (row) {
      return [
        { label: 'Left', value: 'Left Data' }
      ];
    }
    return [];
  }

  configureRightSection(row: any): DataSectionItem[] { // TODO type
    if (row) {
      return [
        { label: 'Right', value: 'Right Data' }
      ];
    }
    return [];
  }
}
