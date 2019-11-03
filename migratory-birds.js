// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    const birdCounter = { 1: 0, 2:0, 3:0, 4:0, 5:0 };
    let mostCommonbird = {
        type: 1,
        count: 0
    };

    for(let i=0; i < arr.length; i+=1){
        let spottedBird = arr[i];
        birdCounter[spottedBird] += 1;

        if (birdCounter[spottedBird] == mostCommonbird.count &&
            spottedBird > mostCommonbird.type){
            continue;
        }

        if (birdCounter[spottedBird] >= mostCommonbird.count){
            mostCommonbird.count = birdCounter[spottedBird];
            mostCommonbird.type = spottedBird;
        }
    }
    return mostCommonbird.type
}