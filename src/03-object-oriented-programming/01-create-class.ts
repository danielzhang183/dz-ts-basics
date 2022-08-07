class Account {
  // readonly id: number
  // owner: string
  // private _balance: number
  nikename?: string

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {
    // this.id = id
    // this.owner = owner
    // this._balance = _balance
  }

  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('Invalid amount')
    this._balance += amount
  }

  // private calculateTax() {

  // }

  get balance(): number {
    return this._balance
  }

  set balance(val: number) {
    if (val < 0)
      throw new Error('Invalid value')
    this._balance = val
  }
}

const account = new Account(1, 'Dylan', 1_000)
account.balance = -1
console.log(account)
