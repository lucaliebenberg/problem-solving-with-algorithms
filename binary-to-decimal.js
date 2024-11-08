function binaryToDecimalConverter(binaryNumber) {
    var decimal = 0n;
    for (let [idx, digit] of Object.entries(binaryNumber)) {
        let power = binaryNumber.length - idx - 1;
        decimal += BigInt(digit) * (2n ** BigInt(power));
    }
    return decimal;
}

binaryToDecimalConverter("111110011101100"); // 31980n