'use strict';

// Variable (read and write), mutable
// let (ES6 에서 추가됨)
// block scope
let globalName = 'global name'; //글로벌 변수

{
let name = 'Ray';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName)
}

console.log(name);
console.log(globalName)

// var (쓰지 말자)
// var hoisting (선언 위치랑 상관없이 제일 위로 끌어올려서 선언을 유효하게 만드는 것)
// 블록이 먹히지 않는다.
{
    age = 4
    var age;
}
console.log(age)

// Constant (read only) - 더 바람직한 방법이다. immutable
// 값의 최초 선언과 동시에 값이 변경되지 않는다.
// 보안에 좋음
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// - reduce human mistakes

// Variable types
// 1. primitive type : 더 이상 작은 단위로 나눠질 수 없는 한 가지 단위(single item) - number, string, boolean, null, undefined, symbol
// 2. object type : single item 이 여럿 모여서 한 박스로 관리(box container)
// 3. function
const count = 17;   // integer
const size = 17.1;  // decimal number
let type = typeof count
// 모든 숫자의 자료형은 number 이다. (int, long, short float... 없다.)
console.log('value: %d, type: %s', count, type );
console.log('value: ${size}, type: ${typeof size}');

// number - special numeric values: infinity, -infinity, NaN(Not an Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log('value: %d, type: ${typeof bigInt}', bigInt);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: %s, type: %s', greeting, typeof greeting);
const helloBob = 'hi ${brendan}!';  //template literals (string) -> {} 로 변수에 담긴 값을 반환
console.log('%s %s', helloBob, typeof helloBob)


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
let nothing = null;
let x;  //undefined

// symbol = create unique identifiers for objects 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log('%s %s', symbol1.description, typeof symbol1)


// object = real-life objct, data structure
const ray = { name: 'ray', age: 26 };
ray.age = 27;   // object 는 const 이지만, 그 안의 값은 변경 가능, 


// Dynamic typing: dynamically typed language 선언 시 타입을 선언하지 않고 프로그램이 동작할 때, 할당된 값에 따라 type 이 변할 수 있다.
let text = 'hello';
console.log(text.charAt(0));    // charAt(0) 은 인덱싱 방법
console.log('%s %s',text, typeof text);
text = 1;
console.log('%d %s', text, typeof text); 
text = '7' + 5; // string 의 합으로 인식
console.log('%s %s', text, typeof text);
text = '8' / '2';
console.log('%d %s', text, typeof text);
// console.log(text.charAt(0));     // 에러 뜸
// 이래서 나온게 TypeScript
