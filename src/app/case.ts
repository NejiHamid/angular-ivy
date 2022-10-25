import { State } from './state.enum';

export class Case {
  x: number;
  y: number;
  state: State;

  constructor(x: number, y: number, state: State) {
    this.x = x;
    this.y = y;
    this.state = state;
  }
}
