function bubbleSort(input) {
    for (let sortedIndex = 0; sortedIndex < input.length; sortedIndex++) {
        for (let unsortedIndex = input.length; unsortedIndex > sortedIndex; unsortedIndex--) {
            if (input[unsortedIndex] < input[unsortedIndex - 1]) {
                let tmp = input[unsortedIndex];
                input[unsortedIndex] = input[unsortedIndex - 1];
                input[unsortedIndex - 1] = tmp;
            }
        }
    }

    return input;
}

// Runtime: O(n^2)
// Space: O(1)

console.log(bubbleSort([11, 2, 6, 3, 2, 8, 9, 5, 7, 100, 3, 2, 5, 1]));
