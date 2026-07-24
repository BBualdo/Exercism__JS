export class Triangle {
  /**
  * @type {number}
  * @private
  */
  _a;

  /**
  * @type {number}
  * @private
  */
  _b;

  /**
  * @type {number}
  * @private
  */
  _c;

  /** @param {...number} sides */
  constructor(...sides) {
    this._a = sides[0];
    this._b = sides[1];
    this._c = sides[2];
  }

  /** @return {boolean} */
  get isEquilateral() {
    return this._isTriangle() && 
      (this._a === this._b && 
      this._b === this._c);
  }

  /** @return {boolean} */
  get isIsosceles() {
    return this._isTriangle() && 
      (this._a === this._b || 
      this._b === this._c || 
      this._a === this._c);
  }

  /** @return {boolean} */
  get isScalene() {
    return this._isTriangle() && 
      (this._a !== this._b && 
      this._b !== this._c && 
      this._a !== this._c);
  }

  /**
   * @return {boolean}
   * @private
   */
  _isTriangle() {
    return this._a + this._b > this._c && this._b + this._c > this._a && this._a + this._c > this._b;
  }
}
