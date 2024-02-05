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

// 11: empty, null, undefined
// let c; // undefined
// let d = {}; // empty
// let e = null; // null
// console.log(c);
// console.log(d);
// console.log(e);

/* 12: For loops */
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

/* 13: While/Do While Loops */
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

/* 14: if/else statement */
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

/* 15: Switch Case */
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

/* 16: Variables & Block Scope */
// for(let i = 0 ; i <= 10 ; i++) {
//     console.log(i);
// }
// console.log(i);
// https://www.w3schools.com/js/js_scope.asp

/* 17:Declare Functions */
// function sum(a, b) {
//     return a + b;
// }
// let c = sum(10, 10);
// console.log('sum a + b :', c);

/* 18: Return */
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

/* 19: Arrow Functions */
//  let sum = (a, b) => {
//     return a + b;
//  }
//  console.log(sum);

/* 20: Functions vs Method */
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

/* 21: Callbacks */
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

/* 22: Filter/ Find */
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

/* 23: Map Arrays */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log('arr i:', arr[i]);
// }
// let mapArr = arr.map((item, index) => {
//     item = item * item
//     return item;
// });
// console.log('Arr:', mapArr);

/* 24: Reduce */
// let array1 = [1, 2, 3, 4];
// let initialValue = 0;
// let sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
// console.log(sumWithInitial);

/* 25: Sort */
// let arr = ['1', '4', '2', '120', '99'];
// arr.sort((a, b) => a - b);
// console.log(arr);

/* 26: Lodash */
// lodash.com

/* 27: synchronous and asynchronous */
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('run 3s');
// }, 3000)
// console.log(3);
// console.log(4);


/* 28: HTTP Requests (API url)  */
// jsonplaceholder.typicode.com
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4) {
//        console.log('check', xhttp.responseText);
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// xhttp.send();

// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState == 4) {//        console.log('check', request);
//     }
// };
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// request.send();

/* Status Code */
// var request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState == 4 && request.status === 200) {
//         console.log(this.readyState);       
//         console.log('check', request);
//     } else {
//         console.log('status', request.status);
//     }
// };
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// request.send();

/* Callback Functions */
// const getCallBack = (err, data) => {
//     if(err) {
//         console.log('get Err', err);
//     }
//     if(data) {
//         console.log('get Data', data);
//     }
// }
// function callBack(getCallBack) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && request.status === 200) {
//             // console.log(this.readyState);       
//             const data = request.responseText
//             getCallBack(undefined, data);
//         } 
//         if (this.readyState == 4 && request.status !== 200) {
//             getCallBack('false', undefined);
//         }
//     };
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     request.send();
// }
// callBack(getCallBack);

/* Using JSON data */
// const getCallBack = (err, data) => {
//     if(err) {
//         console.log('get Err', err);
//     }
//     if(data) {
//         console.log('get Data', data);
//     }
// }
// function callBack(getCallBack) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (this.readyState == 4 && request.status === 200) {
//             // console.log(this.readyState);       
//             const data = JSON.parse(request.responseText);
//             const dataString = JSON.stringify(data);
//             console.log(dataString);
//             getCallBack(undefined, data);
//         } 
//         if (this.readyState == 4 && request.status !== 200) {
//             getCallBack('false', undefined);
//         }
//     };
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     request.send();
// }
// callBack(getCallBack);

/* CallBack Hell */
