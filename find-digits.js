function findDigits(n) {
    const arrayOfDigits = String(n).split("");
    let divisorCounter = 0;
    arrayOfDigits.forEach( digit => {
        digit = parseInt(digit);
        if (n % digit === 0){
            divisorCounter += 1;
        }
    });

    return divisorCounter;
}