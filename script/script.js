var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.x = 10;
    }
    SonAccount.prototype.addY = function () {
        this.y = 20;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
    }
    return MotherAccount;
}());
var s = new SonAccount();
s.y == undefined;
s.addY();
s.y == 20;
var x = 10;
function somma(a, b) {
    return a + b;
}
somma(10, 5);
//----------------------------------------------------------------
function getInfo(a) {
    var x = 10;
    var i = "Nome Cognome";
    if (a) {
        return x;
    }
    else {
        return i;
    }
}
// let info = getInfo();
var test = getInfo(true);
console.log(info.toUpperCase());
