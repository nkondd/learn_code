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

### What is the Set data structure for? What methods does it implement?

Об’єкт `Set` дозволяє зберігати **унікальні значення будь-якого типу**, будь то примітивні значення чи посилання на об’єкти.

`Set` is a keyed collection of **unique items** stored in no particular order. Unlike other collection types like Stack, Queue, and Array, a Set is used in list comparison and to test whether an item exists in a set or not. It is correct to say that a Set stores key-key value pairs because you use the item to test if it is in the set.

Set is also an abstract data type which means that it is defined by its behavior much like Stack and Queue Data Structures. Because of its key-key nature, a Set is much more closely related to a Map than anything else and you can even implement a Set using it.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
[Video](https://www.youtube.com/watch?v=7dXs9yMX7EM&feature=youtu.be&ab_channel=Mateacademy)

### What is the Map data structure for? What methods does it implement?

Об’єкт `Map` містить пари ключ-значення та запам’ятовує вихідний порядок вставки ключів. Будь-яке значення (як об’єкти, так і примітивні значення ) можна використовувати як ключ або значення.

* `Map` **не містить ключів за замовчуванням.** Він містить лише те, що в нього явно вкладено.

* `Map` безпечно використовувати з наданими користувачем ключами та значеннями.

* **Ключі** `Map` **можуть бути будь-якими значеннями** (включно з функціями, об’єктами чи будь-яким примітивом).

* Кількість елементів у a `Map` легко отримати з його `size` властивості.

* `Map` **є ітерованим**, тому його можна безпосередньо ітерувати.

Правильне використання для зберігання даних на карті здійснюється через `set(key, value)` метод.

``` js
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```

``` js
Map.prototype.size
Map.prototype.clear() // Видаляє з Map об’єкта всі пари ключ-значення.
Map.prototype.delete() // Повертає true, якщо елемент в Map об’єкті існував і був видалений, або false якщо елемент не існує. map.has(key) повернеться false потім.
Map.prototype.get()
Map.prototype.has()
Map.prototype.set()
Map.prototype[@@iterator]() // Повертає новий об’єкт Iterator, який містить двочленний масив [key, value] для кожного елемента в Map об’єкті в порядку вставки.
Map.prototype.keys()
Map.prototype.values()
Map.prototype.entries()
Map.prototype.forEach()
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
[Video](https://www.youtube.com/watch?v=DldDgJNfDvs&ab_channel=Mateacademy)

### What are WeakSet and WeakMap and how do they differ from their "strong" counterparts?

[Video](https://youtu.be/dvKfxo7sbb8)

### What is the application of regular expressions? What are some basic ways to work with them in JavaScript?

**Regular expressions are patterns used to match character combinations in strings.** In JavaScript, regular expressions are also objects. These patterns are used with the `exec()` and `test()` methods of `RegExp`, and with the `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()` methods of `String`.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
[Video](https://youtu.be/jaQculJ-PpM)

### What is the meaning of parentheses, brackets, and braces in regular expressions?

* **[ ]** - indicate a **set of characters to match**. Any individual character between the brackets will match, and you can also use a hyphen to define a set.

``` js
'elephant'.match(/[a-d]/) // -> matches 'a'
'elephant'.match(/[A-D]/) // -> no match
'elephant'.match(/[A-D]/i) // -> matches 'a'
```

* **{ }** - are used to **specify an exact amount of things to match.** They are used after an expression: \na{2}\ will only match 'na' exactly twice.

``` js
'panama'.match(/na{2}/) // -> no match
'banana'.match(/na{2}/) // -> matches 'nana'
```

* **( )** - represent **remembered matches.** This is especially useful for find-and-replace operations or any time you need to do something with part of the match. When a match is remembered you can use `$n` to refer to it, starting with `$1` up to `$9`, or with `$&` to refer to the entire match.

``` js
'Firsty McLastname'.match(/([A-Za-z]+)\s([A-Za-z]+)/) // -> matches 'First McLastname' with 'Firsty' remembered as $1 and 'McLastname' as $2

'Firsty McLastname'.replace(/([A-Za-z]+)\s([A-Za-z]+)/, '$1') // -> returns 'Firsty'

'Firsty McLastname'.replace(/([A-Za-z]+)\s([A-Za-z]+)/, '$2, $1') // -> returns 'McLastname, Firsty'

'Firstipher Lasterman'.replace(/([A-Za-z]+)\s([A-Za-z]+)/, '$&') // -> returns 'Firstipher Lasterman'
```

[Link](https://plainenglish.io/blog/regular-expressions-brackets-f2d6f69ffe13)
[Video](https://youtu.be/xmDGUhXkMsU)

### What is the meaning of the following characters in regular expressions: +, *, ?, ^, $?

* **x+** - Matches the preceding item "x" **1 or more times.** Equivalent to `{1,}`. For example, `/a+/` matches the "a" in `"candy"` and all the "a"'s in `"caaaaaaandy"`.

* **x*** - Matches the preceding item "x" **0 or more times**. For example, `/bo*/` matches `"boooo"` in `"A ghost booooed"` and `"b"` in `"A bird warbled"`, but nothing in `"A goat grunted"`.

* **x?** - Matches the preceding item "x" **0 or 1 times**. For example, `/e?le?/` matches the `"el"` in `"angel"` and the `"le"` in `"angle."`

* **^** - **Matches the beginning of input.** If the multiline flag is set to true, also matches immediately after a line break character. For example, `/^A/` does not match the `"A"` in `"an A"`, but does match the first `"A"` in `"An A"`.

* **$** - **Matches the end of input.** If the multiline flag is set to true, also matches immediately before a line break character. For example, `/t{dollar}/` does not match the `"t"` in `"eater"`, but does match it in `"eat"`.

* **`[^xyz]`, `[^a-c]`** - **A negated or complemented character class.** That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets, it is taken as a literal hyphen to be included in the character class as a normal character. For example, `[^abc]` is the same as `[^a-c]`. They initially match `"o"` in `"bacon"` and `"h"` in `"chop"`.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
[Video](https://www.youtube.com/watch?v=L6TkSaPAGn0&ab_channel=Mateacademy)

### What is recursion? What is a stack?

**Recursion** is when a **function calls itself**. A function that calls itself can be called a recursive function.

Recursive function **must be written with a stopping condition.** This is sometimes referred to as a base condition. Recursive functions are very similar to `for/while` loops. Both execute code multiple times and a condition must be given to cease the loop. It is important to note that the condition must be attainable.

Recursive functions often use `if…else` statements to avoid an infinite loop. One branch of the `if…else` statement will make the recursive call until a condition is met, and then the other branch will end recursion.

**The call stack** is a **data structure** that the JavaScript interpreter uses to keep track of its place in a script that calls multiple functions. JavaScript has a **single call stack**, therefore **only one function can be executed at a time**. This is what makes JavaScript synchronous.

The call stack works on a Last-In First-Out principle. This means that **the last function to be added to the call stack will be the first to execute and pop off the stack.**

When a function is called, it is added to the call stack. Any functions that are called from within that function are then added to the top of the call stack. Multiple functions can be added to the stack in this manner.

**When the current function finishes, it is popped off the stack and the interpreter returns to where it left off with the previous function.** The interpreter will continue finishing functions and popping them off the stack until there are no more functions left on the call stack.

[Medium](https://medium.com/@marc.herman.rodriguez/recursion-and-the-call-stack-93666f923226)
[Video](https://youtu.be/mnpT1KJf6Ow)

### What is a class?

**Classes** are a **template for creating objects**. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

Classes are in fact **"special functions"**, and just as you can define function expressions and function declarations, a class can be defined in two ways: a `class expression` or a `class declaration`.

``` js
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
```

[Video](https://youtu.be/52-DT0SkwAA)

### Class Inheritance
1. To extend a class: `class Child extends Parent`:
* That means `Child.prototype.__proto__` will be `Parent.prototype`, so methods are inherited.
2. When overriding a constructor:
* We must call parent constructor as `super()` in Child constructor before using this.
3. When overriding another method:
* We can use `super.method()` in a Child method to call Parent method.
4. Internals:
* Methods remember their class/object in the internal `[[HomeObject]]` property. That’s how super resolves parent methods.
* So it’s not safe to copy a method with super from one object to another.

### What are static properties of a class? 

The static keyword defines a static method or field for a class, or a static initialization block. Static properties **cannot be directly accessed on instances of the class**. Instead, they're **accessed on the class itself**.

Static methods are often utility *functions*, such as functions to **create** or **clone objects**, whereas *static properties* are useful for **caches**, fixed-configuration, or any other **data you don't need to be replicated across instances**.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
[Video](https://youtu.be/jfjh4b4i76U)

### How would you check whether an object belongs to a certain class?
The `instanceof` operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.

`obj instanceOf Class` checks whether `Class.prototype` is equal to one of the prototypes in the `obj` prototype chain.

``` js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false
```

[JS Info](https://javascript.info/instanceof)
[Video](https://youtu.be/efbr-YnRr9E)

### What are the means of error handling in JavaScript?
* `throw`: to raise a custom error.

* `try`: wrap suspicious code that may throw an error in try block.

* `catch`: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Generally catch block is used to **log an error** or display specific messages to the user.

* `finally`: code in the finally block will **always be executed** regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

``` js
try
{
     var result  =  Sum(10, 20); // Sum is not defined yet
}
catch(ex)
{
    document.getElementById("errorMessage").innerHTML = ex;
}
finally{
    document.getElementById("message").innerHTML = "finally block executed";
}
```

[Link](https://www.tutorialsteacher.com/javascript/javascript-error-handling)
[Video](https://youtu.be/hV3j594KAIg)

### 

**Підняття (hoisting)** - це термін, що використовується для пояснення поведінки змінних оголошень у вашому коді. Змінні, оголошені або ініціалізовані за допомогою ключового слова `var` будуть переміщені у верхню частину поточної області, що ми називаємо "підняттям". Однак, "піднімається" лише оголошення змінної, присвоєння значення (якщо воно є) залишиться на колишньому місці.

Зверніть увагу, що оголошення фактично не переміщається - движок JavaScript аналізує оголошення під час компіляції та дізнається про оголошення та їх області видимості. Просто легше зрозуміти таку поведінку, представляючи оголошення як переміщення вгору своєї області видимості. Давайте розглянемо кілька прикладів.

``` js
// оголошення змінних через var піднімаються.
console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1
// оголошення змінних через let/const не піднімаються.
console.log(bar); // ReferenceError: bar is not defined
let bar = 2;
console.log(bar); // 2
```

При оголошенні функції її тіло піднімається нагору, тоді як у функціональних виразів (коли змінної присвоюється функція) піднімається лише змінна.

``` js
// Оголошення функції
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]
// Функціональний вираз
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function() {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]
```

### Чому не слід розширювати нативні JavaScript-об'єкти?

Розширення вбудованого/нотивного об'єкта JavaScript означає додавання властивостей/функцій до його прототипу. Хоча на перший погляд це може здатися гарною ідеєю, на практиці це небезпечно. Уявіть, що код використовує кілька бібліотек, які розширюють `Array.prototype`, додаючи той самий метод `contains`. В результаті код працюватиме неправильно, якщо поведінка цих двох методів не буде однаковою.

Єдиний випадок, коли можна розширити нативний об'єкт — це при створенні **поліфіла**, створивши власну реалізацію методу, який є частиною специфікації JavaScript, але може бути відсутнім у застарілих браузерах.

### Поясніть різницю між синхронними та асинхронними функціями

Синхронні функції є блокуючими, а асинхронні ні. У синхронних функціях одна операція повинна завершитися, перш ніж буде запущено наступну операцію. У цьому випадку скрипт виконується строго по порядку операцій, і виконання скрипту припиняється, якщо одна з операцій займає багато часу.

Асинхронні функції зазвичай приймають callback-функцію як параметр, і виконання продовжується на наступному рядку відразу після виклику асинхронної функції. Callback-функція викликається лише тоді, коли асинхронна операція завершена та стек викликів порожній. Ресурсоємні операції, такі як завантаження даних з веб-сервера або запити до бази даних, повинні виконуватися асинхронно, щоб основний потік міг продовжувати виконувати інші операції замість блокування до завершення цієї довгої операції (у разі браузерів інтерфейс буде зависати).

### Чи можете ви навести приклад карірованої функції (curry function) і в чому їхня перевага?

**Каррування** - це **патерн, де функція з більш ніж одним параметром розбивається на кілька функцій, які при послідовному виклику будуть накопичувати всі необхідні параметри по одному**. Цей метод може бути корисним для полегшення читання та написання коду, написаного у функціональному стилі. Важливо, що функція каррова повинна починатися як одна функція, а потім розбиватися на послідовність функцій, кожна з яких приймає один параметр.

``` js
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }
  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) {
        return fn(…args, newArgument);
      }
      return _curried(depth - 1, [... args, newArgument]);
    };
  }
  return _curried(fn.length, []);
}
function add(a, b) {
  return a + b;
}
var curriedAdd = curry(add);
var addFive = curriedAdd(5);
var result = [0, 1, 2, 3, 4, 5]. map (addFive); // [5, 6, 7, 8, 9, 10]
```