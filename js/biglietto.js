const kilometer = prompt("Quanti chilometri vuoi percorrere?");
console.log(kilometer);
document.getElementById('kilometer').innerHTML += kilometer + ' km';

const age = prompt("Quanti anni hai?");
console.log(age);

const priceKm = 0.21;

let price = kilometer * 0.21;
console.log(price);

let priceMinorenni = price - ((price * 20) / 100);

let priceOverSessanta = price - ((price * 40) / 100);

if (age < 18) {
    console.log(priceMinorenni.toFixed(2));
    document.getElementById('total-price').innerHTML += priceMinorenni.toFixed(2) + ' Euro';
} else if (age > 65) {
    console.log(priceOverSessanta.toFixed(2));
    document.getElementById('total-price').innerHTML += priceOverSessanta.toFixed(2) + ' Euro';
} else {
    console.log(price);
    document.getElementById('total-price').innerHTML += price.toFixed(2) + ' Euro';
}
