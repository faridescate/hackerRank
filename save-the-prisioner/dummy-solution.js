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