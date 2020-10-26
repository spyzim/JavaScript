// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
// 덧셈, 뺄셈, 나눗셈, 곱셈, 나머지 연산자, 제곱 연산자...

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
//postIncrement = counter
//counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10<6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value. 검사하다가 true 값을 찾는 순간 검사를 멈춘다
console.log(`or: ${value1 || value2 || check()}`);  // 연산이 복잡한 check 함수는 일부로 뒤에 뒀다.

// && (and), finds the first falsy value. 거짓 값을 찾는 순간 검사를 멈춘다. False 반환
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something -> 어떤 객체가 null 이 아닐 때, 그 객체의 something 이라는 값을 받아오게 하는 역할로 && 를 쓰기도 한다.

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('블라블라')
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const ray1 = { name: 'ray' };
const ray2 = { name: 'ray' };
const ray3 = ray1;
console.log(ray1 == ray2);
console.log(ray1 === ray2);
console.log(ray1 === ray3);


// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Comditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ray') {
    console.log('Welcome, Ray!');
} else if (name === 'coder') {
    console,log('You are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ray' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Crome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition i truthy,
// body code i executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for ( let i = 0; i < 5; i ++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i:${i}, j:${j}`);
    }
}

// break, continue