function decimalToBinaryConverter(base10number) {
    var binary = "";
    var next = base10number;
    while (next > 0n) {
        let remainder = next % 2n;
        binary = remainder + binary;
        next = next / 2n;
    }
    return binary;
}

decimalToBinaryConverter(31980n); // 111110011101100
