let swap = function (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}




function QuickSortLomuto(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let helper = function (start, end) {
        if (start >= end) {
            return;
        }

        let pivot = start;
        let begin = start;
        for (let end = start + 1; end < arr.length; end++) {
            if (arr[end] < arr[pivot]) {
                begin++;
                swap(arr, begin, end);
            }
        }
        swap(arr, pivot, begin);
        helper(start, begin - 1);
        helper(begin + 1, end);
    }

    helper(0, arr.length - 1);
    return arr;
}

function QuickSortHoares(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let helper = function (start, end) {
        if (start >= end) {
            return;
        }
        let pivot = start;
        let smaller = start + 1;
        let bigger = end;
        while (smaller <= bigger) {
            if (arr[smaller] < arr[pivot]) {
                smaller++;
            } else if (arr[bigger] > arr[pivot]) {
                bigger--;
            } else {
                swap(arr, smaller, bigger);
                smaller++;
                bigger--;
            }

        }
        swap(arr, pivot, bigger);
        helper(start, bigger - 1);
        helper(bigger + 1, end)

    }

    helper(0, arr.length - 1);
    return arr;
}

console.log(QuickSortHoares([5, 7, 6, 3, 1, 2, 4]));