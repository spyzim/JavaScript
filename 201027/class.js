'use strict';
// object-oriented programming
// class: template  클래스는 템플릿에 속한다
// object: instance of a class  실제로 데이터를 넣어 만드는 것
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const ray = new Person('ray', 26);
console.log(ray.name);
console.log(ray.age);
ray.speak()

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 값을 return
    // getter 를 쓰는 순간, 위의 constructor 에서 this.age 가 getter 를 호출한다
    get age() {
        return this._age;
    }

    // set 은 값을 설정하기 때문에, value 를 받아와야 한다.
    // constructor 에서 = age 로 값을 할당하려 할 때, 바로 메모리에 할당하는 것이 아니라 setter 호출한다.
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
    
}

const user1 = new User('Steve', 'Job', -1);     // 나이가 -1???? 말이 안돼
console.log(user1.age)      // user1._age 가 아닌 이유는 getter 와 setter 가 내부적으로 동작하기 때문

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
// 클래스 내의 fiels 와 methods 는 새로운 object 를 만들때 마다, 그대로 복제되어 그 값만 변경 가능, static 을 쓰면 object 와 상관없이 class 자체에 연결되어잇다.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher) 만약 static 이 없었다면 publisher 를 출력할 수 있었을 것이지만 지금은 undefined
console.log(Article.publisher);
Article.printPublisher();
// static 을 사용하면 class 자체의 변수로 사용된다. 다른 객체를 통해서 접근 불가능
// 메모리의 절약


// 5. Inheritance
// a way for one class to extend another class.
// 상속과 다양성!!!
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// extends 를 쓰면 Shape 에 있는 모든 것들이 포함된다.(상속)
class Rectangle extends Shape {}
class Triangle extends Shape {
    // overriding, 부모의 성질도 가져오기 위해 super 을 쓴다.
    draw() {
        super.draw();
        console.log('세모');
    }
    // overriding (재정의)
    getArea() {
        return (this.width * this.height) / 2;
    }

    // 자스의 object 의 method 를 오버라이딩
    toString() {
        return `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape); // shape 을 상속했슴
console.log(triangle instanceof Object);    // 모든 object class 는 자스의 모든 object 를 상속한 것
console.log(triangle.toString())


// Objects
// one of th JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object  = { key : value } key 와 value 의 집합


// 1. Literals and properties
// const name = 'rayoh';
// const age = 26;
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax
// object 선언하는 2가지 방법
// print(name, age);
// function print(name, age) {
function print_info(person) {
    console.log(person.name);
    console.log(person.age);
}

const rayoh = { name: 'rayoh', age: 26 };
print_info(rayoh);

rayoh.hasJob = true;
console.log(rayoh.hasJob);
// 동적이다. 추가 가능

delete rayoh.hasJob;
console.log(rayoh.hasJob);
// 삭제도 가능


// 2. Computed properties // 접근하는 방법들
// key should be always string type
console.log(rayoh.name);
console.log(rayoh['name']);
rayoh['hasJob'] = true;     // 추가
console.log(rayoh.hasJob);

// 정확히 어떤 key 가 필요한지 애매할 때 쓰는 것이 computed properties

// ex)
function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}
printValue(rayoh, 'name');
printValue(rayoh, 'age')
// 동적으로 데이터 받아올 수 있다.

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new NewPerson('ray', 26);
console.log(person4)

// 4. Constructor Function
function NewPerson(name, age) {
        // this = {};
        this.name = name;
        this.age = age;
        // return this;
}


// 5. in operator: propery existence check (key in obj)
console.log('name' in ray);
console.log('age' in ray);
console.log('random' in ray);
console.log(ray.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ray) {
    console.log(key)
}

// for (value of iterable)
const array = [1,2,3,4,5];
for(let i =0; i < array.length; i++) {
    console.log(array[i]);
}
for(let value of array) {
    console.log(value)
}


// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user)

// old way
const user3 = {}
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);