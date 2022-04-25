const input = document.getElementById("input"),
    output = document.getElementById("output"),
    coins = [100, 50, 25, 10, 5, 1];
function real2centavos() {
    let real = parseFloat(input.value);
    // if the user enters a negative value, the module of this value will be considered
    if (real < 0) {
        real *= (-1);
    }
    // round the input to a value to two decimal places
    input.value = real.toFixed(2);
    let remainder = parseInt(real * 1000) / 10,
        amount = [],
        msg = "Your amount of centavos is " + remainder + "<br>";
    for (let count = 0; remainder > 0; count++) {
        amount[count] = (remainder - (remainder % coins[count])) / coins[count];
        remainder = remainder % coins[count];
        if (amount[count] > 0) {
            if (amount[count] == 1) {
                qtd = "coin";
            }
            else {
                qtd = "coins"
            }
            if (count == 0) {
                msg += amount[count] + "x 1 real " + qtd + "<br>"; //in Brazil there is the 1 real coin (which is equivalent to 100 cents)
            }
            else {
                msg += amount[count] + "x " + coins[count] + " centavos " + qtd + "<br>";
            }
        }
    }
    output.innerHTML = msg;
}