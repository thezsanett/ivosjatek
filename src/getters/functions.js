export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function insertToArrayWithOffset(shuffledArray, dataArrayToInsert, randomOffset = false) {

    dataArrayToInsert.forEach((tuple) => {
        const randomPosition = Math.floor(Math.random() * shuffledArray.length);
        shuffledArray.splice(randomPosition, 0, tuple[0]);

        let offSet = 1;
        if (randomOffset) offSet = Math.floor(Math.random() * (shuffledArray.length-randomPosition-1));
        shuffledArray.splice(randomPosition+offSet, 0, tuple[1]);
    });

    return shuffledArray;
}