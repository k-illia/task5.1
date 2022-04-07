// Цифровой корень — это рекурсивная сумма всех цифр числа.
//
//     Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной
// цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число.
//     Ввод будет неотрицательным целым числом.
//
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2






function digitalRoot2(number) {
    let sum = number.toString().split("").reduce(function(previousValue, currentValue) {
        return Number(previousValue) + Number(currentValue);
    })
    if (sum > 9) {
        return digitalRoot2(sum)
    } else {
        return sum
    }
}
digitalRoot2(2656526)