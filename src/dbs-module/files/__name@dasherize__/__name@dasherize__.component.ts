import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'dbs-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

  constructor() {}

  toggleHistory(tabIndex: number): void {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
