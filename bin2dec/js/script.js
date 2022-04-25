//it is deliberate not to use <b>parseInt(x, 2)
function bin2dec() {
    let bin = document.getElementById("input").value;
    let dec = 0;
    let count = 0;
    let size = bin.length;
    let zero_or_one = true;
    while (count < size && zero_or_one) {
        if (parseInt(bin.substr(count, 1)) == 1 || parseInt(bin.substr(count, 1)) == 0) {
            dec += parseInt(bin.substr(count, 1)) * Math.pow(2, (size - count - 1));
            count++;
        }
        else {
            zero_or_one = false;
        }
    }
    if (zero_or_one) {
        document.getElementById("output").innerHTML = "Decimal equivalent: " + dec;
    }
    else {
        document.getElementById("output").innerHTML = "You entered something other than zero and one";
    }
}