// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let score = [0, 0];
    for (let i = 0; i < 3; i++){
        if (a[i] === b[i]) continue;
        
        if (a[i] > b[i]) {
            score[0] += 1 
        } 
        else {
            score[1] += 1;
        }
    }
    return score
}