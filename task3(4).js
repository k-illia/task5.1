// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа
// в порядке возрастания, оставив четные числа на их исходных позициях.
//
//     Примеры
//
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    for (let i = 0; i< array.length - 1; i++) {
        for(let j = i; j < array.length - 1; j ++) {
            if (array[i] %2 !== 0 && array[j] %2 !== 0 && array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))