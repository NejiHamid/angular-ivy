import { Component, OnInit, VERSION } from '@angular/core';
import { Case } from './case';
import { Grid } from './grid';
import { State } from './state.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private cols = 5;
  private rows = 5;
  grid: Grid;
  ngOnInit() {
    this.grid = new Grid(this.cols, this.rows, []);
    this.initGrid();
    setTimeout(() => {
      //  console.log(this.grid);
      this.getNextGeneration();
      // this.grid = { ...this.grid };
    }, 1000);
  }
  initGrid() {
    this.grid.cases = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const state = i != 0 && i != 4 && j === 2 ? State.ALIVE : State.DEAD;
        const item = new Case(i, j, state);
        this.grid.cases.push(item);
      }
    }
  }

  getNextGeneration() {
    this.grid.cases.forEach((item, index) => {
      this.updateCaseState(item, index);
    });
  }

  updateCaseState(item: Case, index: number) {
    debugger;
    const neighbor1 = this.checkNeighborIndex(index - this.cols)
      ? this.grid.cases[index - this.cols]?.state
      : 0;
    const neighbor2 = this.checkNeighborIndex(index - this.cols + 1)
      ? this.grid.cases[index - this.cols + 1].state
      : 0;
    const neighbor3 = this.checkNeighborIndex(index - this.cols - 1)
      ? this.grid.cases[index - this.cols - 1].state
      : 0;
    const neighbor4 = this.checkNeighborIndex(index + 1)
      ? this.grid.cases[index + 1].state
      : 0;
    const neighbor5 = this.checkNeighborIndex(index - 1)
      ? this.grid.cases[index - 1].state
      : 0;
    const neighbor6 = this.checkNeighborIndex(index + this.cols)
      ? this.grid.cases[index + this.cols].state
      : 0;
    const neighbor7 = this.checkNeighborIndex(index + this.cols + 1)
      ? this.grid.cases[index + this.cols + 1].state
      : 0;
    const neighbor8 = this.checkNeighborIndex(index + this.cols - 1)
      ? this.grid.cases[index + this.cols - 1].state
      : 0;
    const sumNeighbors =
      neighbor1 +
      neighbor2 +
      neighbor3 +
      neighbor4 +
      neighbor5 +
      neighbor6 +
      neighbor7 +
      neighbor8;
    if (item.state === State.DEAD && sumNeighbors === 3) {
      item.state = State.ALIVE;
    } else if (
      item.state === State.ALIVE &&
      (sumNeighbors === 2 || sumNeighbors === 3)
    ) {
      item.state = State.ALIVE;
    } else {
      item.state = State.DEAD;
    }
    console.log(item?.state, index);
  }

  checkNeighborIndex(index: number) {
    return index > 0 && index < 24;
  }
}
