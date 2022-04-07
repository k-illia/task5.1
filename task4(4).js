//     Что такое анаграмма? Ну, два слова являются анаграммами друг друга,
//     если они оба содержат одни и те же буквы.
//     Например:
//
// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
//
// 'abba' & 'abca' == false
//
//     Напишите функцию, которая найдет все анаграммы слова из списка.
//     Вам будет дано два входа слово и массив со словами.
//     Вы должны вернуть массив всех анаграмм или пустой массив, если их нет.
//     Например:
//
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


// let anagrams  = {
//     abba : ['aabb', 'abcd', 'bbaa', 'dada']
// }
//
// console.log(anagrams.abba.filter(el => el === "aabb"))
// let a = ['aabb', 'abcd', 'bbaa', 'dada']
// let b = a.filter(function (ana){
//     return ana
// })
// console.log(b)
//
// var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'ppale'];
//
//
// function filterItems(query) {
//     return fruits.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     })
// }
//
// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']
// console.log(filterItems('apple'))

function annagrams(key, value) {
    let sun = []
    let bana = key.split('').sort().join('')
    for (let i = 0; i < value.length; i++) {
        if (value[i].split('').sort().join('') === bana) {
            sun.push(value[i])
        }
    }
    return sun;
}
console.log(annagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

