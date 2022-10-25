import { Case } from './case';

export class Grid {
  cols: number;
  rows: number;
  cases: Case[];
  constructor(cols: number, rows: number, cases) {
    this.cols = cols;
    this.rows = rows;
    this.cases = cases;
  }
}
