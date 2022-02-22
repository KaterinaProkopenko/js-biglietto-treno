const kilometer = prompt("Quanti chilometri vuoi percorrere?");
console.log(kilometer);

const age = prompt("Quanti anni hai?");
console.log(age);

const priceKm = 0.21;

let price = kilometer * 0.21;
console.log(price);

let priceMinorenni = price - ((price * 20) / 100);

let priceOverSessanta = price - ((price * 40) / 100);

if (age < 18) {
    console.log(priceMinorenni);
} else if (age > 65) {
    console.log(priceOverSessanta);
} else {
    console.log(price);
}
