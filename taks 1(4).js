Напишите функцию sum, которая бы работала следующим образом:

    sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(num) {
    let result = num
    function f(s) {
        result += s
        console.log(result)
        return f
    }

    console.log(result)
    return f
}
sum(1)(2)(3)
console.log(sum3(1)(3)(2)); // 6
console.log(sum4(1)(3)(2)(4)); // 10