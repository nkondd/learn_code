### .forEach(callback).

`.forEach(callback)` runs `callback` once per each element, returns `undefined`

``` js
const callback = function (element, index, arr) {
  console.log(element, index, arr);
};

const result = ['a', 'b', 'c'].forEach(callback);

// 'a' 0 ['a', 'b', 'c']
// 'b' 1 ['a', 'b', 'c']
// 'c' 2 ['a', 'b', 'c']

console.log(result); // undefined
```

[Cheat Sheet](https://mate-academy.github.io/fe-program/js/extra/array)
[Video](https://www.youtube.com/watch?v=3ar6WAr1Xgw)

### .map(callback) 

`.map(callback)` runs `callback` once per each element and puts the results a **new array**.

``` js
const callback = (element, index, arr) => (element + index);

console.log(
  [10, 20, 30].map(callback), // [10, 21, 32]
  [10, 20, 30].map(el => el + 5), // [15, 25, 35]
);
```

### .filter(callback)

`.filter(callback)` runs `callback` once per each element and puts the elements for which the callback returns a **truthy value** to a **new resulting array.**

``` js
const callback = (el, i, arr) => el > arr.length;

console.log(
  [1, 4, 7].filter(callback), // [4, 7]
  [1, 4, 7].filter(el => (el % 2 === 0)), // [4]
);
```

### .find(callback)
`.find(callback)` returns the **first element** for which the callback returns a **truthy value.**

### .findIndex(callback)

`.findIndex(callback)` returns an **index of the first element** for which the callback returns a **truthy value.**

``` js
const callback = (el, i, arr) => el > arr.length;

console.log(
  [1, 4, 7].find(callback), // 4
  [1, 4, 7].findIndex(callback), // 1

  [1, 4, 7].find(el => el > 10), // undefined
  [1, 4, 7].findIndex(el => el > 10), // -1
);
```

### .every(callback) & .some(callback)

`.every(callback)` returns **true** if the callback returns a truthy value **for each element** in the array, otherwise false.

`.some(callback)` returns **true** if the callback returns a truthy value **for at least one element** in the array, otherwise false.

``` js
const callback = (el, i, arr) => el > arr.length;

console.log(
  [1, 4, 7].every(callback), // false
  [1, 4, 7].some(callback), // true

  [1, 4, 7].every(el => el > 0), // true
  [1, 4, 7].some(el => el > 0), // true

  [1, 4, 7].every(el => el > 10), // false
  [1, 4, 7].some(el => el > 10), // false

  [].every(el => el > 10), // true
  [].some(el => el > 10), // false
);
```

### .reduce(callback, startValue)

`.reduce(callback, startValue)` runs a callback once per each element and **puts the result as the first argument for the next callback call**. The result of the last callback call becomes the result of the reduce method.

``` js
// Sum the numbers
[2, 5, 3, 1, 7].reduce((sum, n) => sum + n, 0);

// Count occurrences 
'abrakadabra'.split('')
  .reduce((counter, char) => ({
    ...counter,
    [char]: (counter[char] || 0) + 1,
  }), {});
```

### What is lexical environment? (Лексическое окружение)

**Все внешние, доступные функции переменные, называются ее лексическим окружением (LexicalEnvironment).**

>В следующем примере функции доступны две переменные: num1 и num2, которые и являются лексическим окружением нашей функции:

``` js
let num1 = 1;
let num2 = 2;

function func() {
	// функция знает про переменные num1 и num2
}
```

**Само лексическое окружение представляет собой некий внутренний объект JavaScript, привязанный к нашей функции.**

В данном случае его можно представить в следующем виде:

``` js
{num1: 1, num2: 2}
```

Значение любой переменной лексического окружения всегда равно текущему значению этой переменной:

``` js
let num1 = 1; // окружение {num1: 1}
let num2 = 2; // окружение {num1: 1, num2: 2}

// Поменяем переменную num1:
num1 = 123; // окружение {num1: 123, num2: 2}

function func() {
	
}
```

**Когда мы пытаемся обратится к какой-либо переменной внутри функции, эта переменная вначале ищется среди локальных переменных функции и, если такой переменной там нет, то ищется в лексическом окружении функции.**

### What is execution context? (Контекст виконання)

Тепер розглянемо, як працюють рекурсивні виклики. Для цього ми заглянемо під капот функцій.

Інформація про процес виконання запущеної функції зберігається в її контексті виконання.

**Контекст виконання — це внутрішня структура даних, яка містить деталі про виконання функції: де зараз знаходиться потік керування, поточні змінні, значення this(ми його тут не використовуємо) та кілька інших внутрішніх деталей.**

З одним викликом функції пов’язаний лише один контекст виконання.

Коли функція здійснює вкладений виклик, відбувається таке:

1) Поточну функцію призупинено.
2) Контекст виконання, пов'язаний з ним, запам'ятовується в спеціальній структурі даних, що називається **стеком контексту виконання**.
3) Вкладений виклик виконується.
4) Після його завершення старий контекст виконання витягується зі стеку, а зовнішня функція відновлюється з того місця, де вона була зупинена.

### Explain closures.

**Замикання — це комбінація функції, об’єднаної (включеної) з посиланнями на її лексичне середовище. Іншими словами, закриття дає вам доступ до зовнішньої області видимості внутрішньої функції. У JavaScript закриття створюються кожного разу, коли створюється функція, під час створення функції.**

* Навіть якщо зовнішня функція перестає існувати, закриття все ще має доступ до своїх батьківських змінних.
* Закриття не мають доступу до `args` параметрів своєї зовнішньої функції.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=A%20closure%20is%20the%20combination,scope%20from%20an%20inner%20function.)
[freecodecamp](https://www.freecodecamp.org/news/javascript-closures-explained-with-example/#what-are-closures)
[Video](https://www.youtube.com/watch?v=zwhlapl69x4)

### What is this in JavaScript? How does it change its value? How does it work with arrow functions?

**Значение this зависит от того, как вызывается функция.**

1. Если ключевое слово `new` используется при вызове функции, `this` внутри функции является совершенно **новым объектом**.

2. Если для вызова/создания функции используются `apply`, `call` или `bind`, то `this` внутри функции — это **объект, который передается в качестве аргумента**.

3. Если функция вызывается как метод, например, `obj.method()`, то `this` — это **объект, к которому принадлежит функция**.

4. Если функция вызывается без контекста, то есть она вызывается без условий **(in a function)**, описанных в пунктах выше, то `this` является **глобальным объектом**. В браузере это объект `window`. В строгом режиме (`’use strict’`), `this` будет `undefined` вместо глобального объекта.

5. Если применяются несколько из вышеперечисленных правил, то правило, которое выше выигрывает и устанавливает значение this.

6. Если функция является **стрелочной функцией**, то она игнорирует все вышеописанные правила и получает значение `this` из **лексического окружения во время ее создания**.

[w3schools](https://www.w3schools.com/js/js_this.asp#:~:text=What%20is%20this%3F,this%20refers%20to%20the%20object.)
[Video](https://www.youtube.com/watch?v=GT9jV4u-vNE)

### Explain methods bind, call, apply.

Сходство заключается в том, что и `.call`, и `.apply` используются для вызова функций, а также **первый параметр** будет использоваться как значение `this` внутри функции.
А разница в том, что `.call` в качестве следующих аргументов принимает **аргументы, разделенные запятыми**, в то время как `.apply` в качестве следующих аргументов принимает **массив аргументов**.

``` js
function add(a, b) {
  return a + b;
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

Метод `bind()` **создаёт новую функцию**, которая при вызове устанавливает в качестве контекста выполнения `this` предоставленное значение. 
В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.

### What is prototype? Explain how inheritance works in javascript?

Кожен об’єкт зі своїми методами та властивостями містить **внутрішню та приховану властивість**, відому як `[[Prototype]]`. 

**Prototypal Inheritance** — це функція javascript, яка використовується для додавання методів і властивостей в об’єкти. **Це метод, за допомогою якого об’єкт може успадкувати властивості та методи іншого об’єкта**. Традиційно, щоб отримати та встановити `[[Prototype]]` об’єкта, ми використовуємо `Object.getPrototypeOf` та `Object.setPrototypeOf`. Зараз, у сучасній мові, це встановлюється за допомогою `__proto__`.

`prototype` is a **property of a Function object**. It is the prototype of objects constructed by that function.

`__proto__` is an **internal property of an object pointing to its prototype**.

``` js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();

// the following are all true
myPoint.__proto__ == Point.prototype
myPoint.__proto__.__proto__ == Object.prototype
myPoint instanceof Point;
myPoint instanceof Object;
```

Here `Point` is a constructor function, it builds an object (data structure) procedurally. `myPoint` is an object constructed by Point() so `Point.prototype` gets saved to `myPoint.__proto__` at that time.


[Video](https://www.youtube.com/watch?v=DDrf4mpWNDQ)