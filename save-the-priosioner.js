/* 0(1) */
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

/* O(n) */
function saveThePrisoner(n, m, s) {
    let totalCandies = parseInt(m);
    const numberOfPrisioners = parseInt(n);
    
    let currentSeat = parseInt(s);
    let nextSeat = parseInt(s);

    while(totalCandies > 0){
        //deliver a candy
        totalCandies -= 1;
        currentSeat = nextSeat;

        nextSeat += 1; 
        //reset seat count
        nextSeat = 
            nextSeat > numberOfPrisioners ? 
            1 : nextSeat;
        
    }
    return currentSeat;
}