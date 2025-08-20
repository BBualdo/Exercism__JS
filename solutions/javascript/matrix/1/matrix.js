export class Matrix {
  constructor(str) {
    this._matrixStr = str;
  }

  get rows() {
    return this._matrixStr.split("\n")
      .map(line => line.split(" ")
        .map(x => Number(x)));
  }

  get columns() {
    const result = [];

    for (let i = 0; i < this.rows[0].length; i++) {
      const column = [];
      
      for (const row of this.rows) {
        column.push(row[i]);
      }
      
      result.push(column);
    }
      
    return result;
  }
}