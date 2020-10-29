'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banna'];
console.log(fruits);
console.log(fruits.length)
console.log(fruits[0]);
console.log(fruits[2]);

// 3. Looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for( let fruit of fruits) {
    console.log(fruit)
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
// pop: remove an item from th end
fruits.pop();
fruits.pop();
console.log(fruits);
//unshift: add an item to th beginning
fruits.unshift('strawberry', 'peach');
console.log(fruits)
//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits)

// note!!! shift, unshift are much slower than push, pop
// shift 와 unshift 는 기존의 데이터의 위치도 움직여야 하기 때문에

// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1,1,'apple', 'watermelon');
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);

// combine two arrays
const fruits2 = ['grape', 'mango'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('blueberry'));

// lastIndexOf

fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));