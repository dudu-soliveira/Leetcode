// https://leetcode.com/problems/design-spreadsheet/

class Spreadsheet {
  private sheet: Map<string, number>;

  constructor(rows: number) {
    this.sheet = new Map();
  }

  setCell(cell: string, value: number) {
    this.sheet.set(cell, value);
  }

  resetCell(cell: string) {
    this.sheet.delete(cell);
  }

  getValue(formula: string) {
    const [strX, strY] = formula.replace("=", "").split("+");

    let x = Number(strX);
    let y = Number(strY);

    if (isNaN(x)) x = this.sheet.get(strX) ?? 0;
    if (isNaN(y)) y = this.sheet.get(strY) ?? 0;

    return x + y;
  }
}
