import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent implements OnInit {
  constructor() {}
  @Input()
  colorCode = 0;
  ngOnInit() {}

  convertColorCode(colorCode: number): string {
    return colorCode ? 'blue' : 'white';
  }
}
