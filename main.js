//TODO: 1.Arrayda text icindeki ilk herfini boyuk cixarsin
// let arr = ["salam", 'hello', 'yowudoin']
// function toCapitalize(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let s = arr[i].charAt(0).toUpperCase();
//     cap_str = s + arr[i].slice(1)
//     console.log(cap_str)
//   }
// }
// toCapitalize(arr)

//TODO: 2.Arrayda stringlerin ilk stringini boyuye cevir
// let arr = ["salam", 'hello', 'yowudoin']
// function toCapitalize() {
//  let a = arr.shift().toUpperCase()
//   arr.unshift(a)
//   console.log(arr)
// }
// toCapitalize()


//TODO: 3.Arrayda stringlerin ilk stringini boyuye cevir
// let arr = ["124", '232', '23123']
// function toCapitalize() {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].split('').reverse().join(''))
//   }
// }
// toCapitalize()


//TODO: 4.Arrayda stringleri cixar
// let mixedArray = [1, "apple", true, "banana", 42, "cherry"];
// let stringArray = mixedArray.filter(function(element) {
//   return typeof element === 'string';
// });

// console.log(stringArray);

//TODO: 5.Arrayda ededleri cixar
// let mixedArray = [1, "apple", true, "banana", 42, "cherry"];
// let stringArray = mixedArray.filter(function(element) {
//   return typeof element === 'number';
// });
// console.log(stringArray);

//TODO: 6.Arrayda ededleri cixar
// let a = ["6", '5', '4', 6]
// function replaceSix() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == 6) {
//       a[i] = "-";
//     }
//   }
//   console.log(a);
// }
// replaceSix();

//todo 7. Arrayda ustune 5 gel elementlerin
let arr = [1,2,3,4,5,6]
for (let i = 0; i < arr.length; i++) {
   arr[i] = arr[i] + 5
}
console.log(arr)    
