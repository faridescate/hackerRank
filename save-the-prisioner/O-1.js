function saveThePrisoner(n, m, s) {
    const numberOfPrisioners = n;
    const numberOfSweets = m;
    const initialChairNumber = s;

    // After complete rounds
    const leftOverCandies = numberOfSweets % numberOfPrisioners;

    let lastSeat = leftOverCandies + initialChairNumber - 1;
    if ( lastSeat == 0){
        lastSeat = numberOfPrisioners;
    } 
    else if (lastSeat > numberOfPrisioners){
        lastSeat -= numberOfPrisioners; 
    }

    return lastSeat;
}