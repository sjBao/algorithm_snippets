function insertionSort(input) {
    let sortedIndex = 0;

    while (sortedIndex < input.length - 1) {
        let unsortedIndex = sortedIndex + 1;
        let unsortedVal = input[unsortedIndex];

        while (true) {
            if (unsortedIndex < 0) break;

            if (unsortedVal < input[unsortedIndex - 1]) {
                input[unsortedIndex] = input[unsortedIndex - 1];
            } else {
                input[unsortedIndex] = unsortedVal;
                break;
            }
            unsortedIndex--;
        }

        sortedIndex++;
    }
    return input;
}

// Worst case: O(n^2)
// Average case: O(n^2)
// Best case: O(n)

// Space: O(1)

console.log(insertionSort([100, 2, 3, 4, 5, 6, 6, 7, 5, 4, 3, 2, 1]));
