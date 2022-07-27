function selectionSort(input) {
    for (let sortedIndex = 0; sortedIndex < input.length; sortedIndex++) {
        let min = input[sortedIndex];
        let indexAtMin = sortedIndex;


        for (let unsortedIndex = sortedIndex + 1; unsortedIndex < input.length; unsortedIndex++) {
            if (input[unsortedIndex] < min) {
                min = input[unsortedIndex];
                indexAtMin = unsortedIndex;
            }
        }

        let tmp = input[sortedIndex];
        input[sortedIndex] = min;
        input[indexAtMin] = tmp;
    }

    return input;
}

console.log(selectionSort([9,5,6,7,3,6,8,9,1,2,3,3,6,1]));
