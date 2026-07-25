export class BankAccount {
  /** 
  * @type {number}
  * @private
  */
  _balance = 0;

  /**
  * @type {boolean}
  * @private
  */
  _isOpened = false;

  open() {
    if (this._isOpened) {
      throw new ValueError();
    }
    
    this._isOpened = true;
  }

  close() {
    if (!this._isOpened) {
      throw new ValueError();  
    }
    
    this._isOpened = false;
    this._balance = 0;
  }

  /** @param {number} amount */
  deposit(amount) {
    if (!this._isOpened || amount < 0) {
      throw new ValueError();
    }
    
    this._balance += amount;
  }

  /** @param {number} amount */
  withdraw(amount) {
    if (!this._isOpened || amount < 0 || amount > this._balance) {
      throw new ValueError();
    }

    this._balance -= amount;
  }

  get balance() {
    if (!this._isOpened) {
      throw new ValueError();
    }
    
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
