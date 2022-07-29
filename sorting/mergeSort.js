function mergeSort(input) {
    return merge(input, 0, input.length - 1);
}

// Worst case: O(n log(n)));
// Average case: O(n log(n));
// Best case: O(n log(n));

// Space: O(n);

function merge(input, start, end) {
    if (start >= end) return [input[start]];

    const mid = Math.floor((start + end) / 2);
    // delegate half of the array to the left subordinate.
    const left = merge(input, start, mid);
    // delegate half of the array to the right subordinate.
    const right = merge(input, mid + 1, end);
    
    const sortedArr = [];
    let [l, r] = [0, 0];

    // Merge the two sorted arrays.
    while (true) {
        const leftVal = left[l];
        const rightVal = right[r];
        
        if (!leftVal && !rightVal) break;

        if (leftVal === rightVal) {
            sortedArr.push(leftVal);
            sortedArr.push(rightVal);
            l++;
            r++;
            continue;
        }

        if (leftVal < rightVal) {
            sortedArr.push(leftVal);
            l++;
            continue;
        }

        if (rightVal < leftVal) {
            sortedArr.push(rightVal);
            r++;
            continue;
        }

        if (!leftVal) {
            sortedArr.push(rightVal);
            r++;
            continue;
        }

        if (!rightVal) {
            sortedArr.push(leftVal);
            l++;
            continue;
        }
    }

    return sortedArr;
}


console.log(mergeSort([8, 7, 6, 5, 3, 4, 100, 43, 7, 2, 1]));
