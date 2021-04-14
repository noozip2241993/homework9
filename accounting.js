// Export a user class
module.exports = class Account{
    constructor(name){
        this.name = name;
        this.balance = 0;}
        //add an mount to the bank balance
        credit(amount){
            this.balance += amount;
        }
        //Create onwer account
        describe(){
            return `owner : ${this.name}, balance: ${this.balance}`;
        }
    };
