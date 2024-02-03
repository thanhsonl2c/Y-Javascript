/* 1: Alert */
// alert('See noS');

/* 2: Console */
// console.log('See noS');

/* 3: JS data types */
// let a = 5;
// let b = 5.5;
// let c = 6, d = 7, e = 8;
// console.log("Check variable:", a, b, c);
// console.log("Check variable:", 'a =', a, 'b =', b, 'c =',c);

/* 4: Strings */
// let strings = "Strings";
// console.log(strings);
// Note: JavaScript evaluates expressions from left to right
// console.log(1 + 1 + 'a'); // 2 + 'a' = 2a
// console.log('a' + 1 + 1); // a1 + 1 = a11
// let text = `I see "noS"`; ``, '', ""

/* 5: Method with strings */
// https://www.w3schools.com/js/js_string_methods.asp

/* 6: Numbers */
// let a = 2;
// let b = 3;
// let c = 4;
// let d = '5';
// let e = +5; // convert strings to number
// let f = Number(e);
// console.log(a+b);
// console.log(a+c);
// console.log(a*d);
// console.log(a-d);
// console.log(d, typeof d);
// console.log(e, typeof e);
// console.log(f, typeof f);

/* 7: Template Strings */
// Template Strings use back-ticks (``) / ${}
// let a = 5;
// let b = 6;
// console.log("String concatenation" + (a + b) + " and\nnot " + (a * b));
// console.log(`Check String Template: a = ${a}, b = ${b}, a+b = ${a+b}`);

/* 8: Object */
// let object = {
//     name: 'noS',
//     age: 'hidden',
//     nationality: 'vietnamese',
// } // key: value
// // let b = 'name';
// // object[b] = 'Son';
// console.log(`Name?`, object.name);
// console.log(`Age?`, object.age);
// console.log(object);

/* 9: Arrays */
// let arr = [
//     'Team 1',
//     'Team 2',
//     'Team 3',
// ]
// console.log(arr);
// console.log(`First Team:`, arr[0]);
// console.log(`Last Team:`, arr[2]);
// let player = [
//     {
//         name: 'Mudryk',
//         age: '22',
//         nationality: 'Ukraina',
//     },
//     {
//         name: 'JackSon',
//         age: '22',
//         nationality: 'Senegal',
//     },
// ]
// console.log(`Player information: `, player);

/* 10: == & === */
// let a = 5;
// let b = 5;
// console.log('Compare a&b:', 'a =',a, ',', 'b =',b, ',', 'result:',a === b);
// console.log(`Compare a&b: a = ${a}, b = ${b}, result:`, a === b);0

// empty, null, undefined
// let c; // undefined
// let d = {}; // empty
// let e = null; // null
// console.log(c);
// console.log(d);
// console.log(e);

/* For loops */
// for(let i = 1; i < 10; i++) {
//     console.log('Check variable i =', i);
// }

// let arr = [
//     'CHE',
//     'MC',
//     'TOT',
//     'ARS',
// ]
// for(let i = 0; i < arr.length; i++) {
//     console.log('Check variable i =', arr[i]);
// }

/* While/Do While Loops */
// let arr = [
//     'CHE',
//     'MC',
//     'TOT',
//     'ARS',
// ]
// for (let i = 0; i < arr.length; i++) {
//    console.log('Top', i + 1, arr[i]);
// }
// var i = 0;
// while(i < arr.length ) {
//     console.log('Top', i + 1, arr[i]);
//     i++;
// }

// do {
//     console.log('Top', i + 1, arr[i]);
//     i++;
// } while (i < 1);

/* if/else statement */
// let arr = [
//     'CHE',
//     'MC',
//     'TOT',
//     'ARS',
// ]
// let i = 0;
// while(i < arr.length) {
//     if(arr[i].length === 3) {
//         console.log('condition', i + 1, arr[i]);
//     } else {
//         console.log('condition', i + 1, arr[i]);
//     }
//     i++;
// }
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i].length === 3) {
//         console.log('condition', i + 1, arr[i]);
//     }
// }

/* Switch Case */
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log('Check day: ', day);

/* Variables & Block Scope */
// for(let i = 0 ; i <= 10 ; i++) {
//     console.log(i);
// }
// console.log(i);
// https://www.w3schools.com/js/js_scope.asp

/* Declare Functions */
// function sum(a, b) {
//     return a + b;
// }
// let c = sum(10, 10);
// console.log('sum a + b :', c);

/* Return */
// function myFunc(a, b) {
//     console.log('1');
//     console.log('2');
//     return;
//     console.log('3');
//     console.log('4');
//     // a + b;
//     // return a + b;
// }
// console.log('sum : ', myFunc(2, 3));

/* Arrow Functions */
//  let sum = (a, b) => {
//     return a + b;
//  }
//  console.log(sum);

/* Functions vs Method */
// let sum = (a, b) => {
//     return a + b;
// }
// console.log('Sum :', sum(6, 9));
// let objSon = {
//     name: 'Sontt',
//     address: 'HaNam',
//     getName: function() { // Method
//         return this.name;
//     }
// }
// console.log('Get Name Obj:', objSon.getName());

/* Callbacks */
// let sum = (a, b, callBack) => {
//     let sumIn = a + b;
//     setTimeout(()=> {
//         callBack(sumIn);
//     }, 2000)

//     setInterval(() => {
//         callBack(sumIn);
//     }, 2000);
// }
// let printSum = (result) => {
//     console.log('Sum a+b', result);
// }
// sum(6, 9, printSum);

/* Filter/ Find */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let filter = arr.filter((item, index) => {
//     // console.log(index);
//     return item && item > 5;
// });
// console.log(filter);
// let arr = [
//     {name: 'Cat', age: '25'},
//     {name: 'Dog', age: '26'},
//     {name: 'Pig', age: '25'},
//     {name: 'Tiger', age: '26'},
// ]
// let find = arr.find((item, index) => {
//     return item && item.age == 26;
// });
// console.log(find);

/* Map Arrays */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log('arr i:', arr[i]);
// }
// let mapArr = arr.map((item, index) => {
//     item = item * item
//     return item;
// });
// console.log('Arr:', mapArr);
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
