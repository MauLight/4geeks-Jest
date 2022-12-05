class lovedOnes {
    constructor (name, lastname, gender) {
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
    }
}

class inLove extends lovedOnes {
    constructor (name, lastname, gender, lovedone) {
        super (name, lastname, gender);
        this.lovedone = lovedone;
    }
    toJSON() {
        return {lover: `${this.name} loves ${this.lovedone}`}; 
    }
}

const Mau = new inLove ("Mau", "Light", "male", "Elv");

console.log(JSON.stringify(Mau));




const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEurotoDollar = (euro) => {
    return euro * 1.2;
}

const fromDollartoYen = (dollar) => {
    let  dollarToEuro = dollar / 1.2;
    return dollarToEuro * 127.9; 
}

const fromYentoPound = (yen) => {
    let yenToEuro = yen / 127.9;
    return yenToEuro * 0.8;
}

console.log(fromEurotoDollar(2));
console.log(fromDollartoYen(2));
console.log(fromYentoPound(2));
console.log(sum(7, 5));

module.exports = {sum, fromEurotoDollar, fromDollartoYen, fromYentoPound};

