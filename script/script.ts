class SonAccount {
    balance:number;

    constructor(_balanceInit:number = 0){ 
        this.balance = _balanceInit;
    }

    getBalance():number{
        return this.balance;
    }

    oneDeposit(d:number):number {
        this.balance += d;
        return this.balance;
    }

    oneWithdraw(w:number):number|string {
        if(w > this.balance) {
            return "Non hai abbastanza cedito";
        }
        this.balance -= w;
        return this.balance;
    }

}

class MotherAccount extends SonAccount {

    interest:number;

    constructor( _balanceInit:number = 0, _interest = 0.2) {
        super(_balanceInit);
        this.interest = _interest;
    }

    oneWithdraw(w:number):number|string {
        let wInterest = this.addInterest(w);
        if(wInterest > this.balance) {
            return "Non hai abbastanza cedito";
        }
        this.balance -= wInterest;
        return this.balance;
    }

    addInterest(x:number):number {
        return x + (x * this.interest);
    }
}

let s = new SonAccount(100);
let s1 = new SonAccount();

let balanceDiv = document.getElementById("balance")!;
balanceDiv.innerHTML = s.getBalance().toString();

let btnPrelevaFifty = document.getElementById("prelevaFifty")!;
btnPrelevaFifty.addEventListener("click", ()=>{
    balanceDiv.innerHTML = s.oneWithdraw(50).toString();
})

let input = document.getElementById("inputTest") as HTMLInputElement;
input.value = "";

// let m = new MotherAccount();
// let m1 = new MotherAccount(10);
// let m2 = new MotherAccount(10, 0.5);

// function test(a:boolean):string|null {
//     if(a) {
//         return "test";
//     }
//     return null
// }

// let x = test(true);

// s.oneDeposit(document.getElementById("depositInput").value)
// s.oneDeposit(10)

// let x:string = s.balance


// let s = new SonAccount()
// s.y == undefined

// s.addY()
// s.y == 20

// let x = 10;

// function somma(a:number, b:number) {
//     return a + b;
// }


// somma(10, 5)

// //----------------------------------------------------------------
// function getInfo(a:boolean) {
//     let x = 10;
//     let i = "Nome Cognome";
//     if(a) {
//         return x;
//     } else {
//         return i;
//     }
// }

// // let info = getInfo();
// let test = getInfo(true);
// console.log(info.toUpperCase())


// let y = getInfo(false)


// let a:number;

// a = 5;
// a *= 2;
// a += "ciao";