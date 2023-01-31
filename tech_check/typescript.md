### What is TypeScript and what is its purpose?

[CheatSheet](https://mate-academy.github.io/fe-program/js/extra/typescript)

**TypeScript** — це безкоштовна мова програмування з відкритим вихідним кодом, яка розроблена та підтримується **Microsoft**. Це **суворий синтаксичний суперсет JavaScript, який додає необов’язкову статичну типізацію.**

JavaScript - це мова сценаріїв, тоді як **TypeScript - це об'єктно-орієнтована мова**.

* Однією з серйозних переваг TS перед JS є **можливість створення, в різних IDE, такого середовища розробки, яке дозволяє, прямо в процесі введення коду, виявляти поширені помилки**. Застосування TypeScript у великих проектах може призвести до підвищення надійності програм, які, при цьому, можна розгортати у тих середовищах, де працюють звичайні JS-программы.

* TypeScript **підтримує сучасні редакції стандартів ECMAScript**, код, написаний з використанням яких, компілюється з урахуванням можливості його виконання на платформах, які підтримують старіші версії стандартів. Це означає, що **TS-програміст може використовувати можливості ES2015 і новіших стандартів, на зразок модулів, стрілочних функцій, класів, оператора spread, деструктурування, і виконувати те, що у нього виходить, в існуючих середовищах, які поки що цих стандартів не підтримують.**

* TypeScript – це надбудова над JavaScript. Код, написаний на чистому JavaScript, є дійсним кодом TypeScript.

* При використанні режиму суворої перевірки на `null` (для цього застосовується прапор компілятора `--strictNullChecks`), компілятор TypeScript не дозволяє присвоєння `null` і `undefined` змінним тих типів, у яких, в такому режимі, використання цих значень не допускається.

* Маніпуляція з DOM: Ви можете використовувати TypeScript для **керування DOM для додавання або видалення елементів клієнтської веб-сторінки.**

### Які типи даних вбудовані в TypeScript?

* **Number**: використовується для відображення значень чисел. Усі числа в TypeScript зберігаються як **значення з плаваючою комою**.

* **String**: послідовність символів, що зберігається як код **Unicode UTF-16**. Рядки укладаються в одинарні або подвійні лапки.

* **Boolean**: логічний тип даних. Має значення `true` чи `false`.

* **Null**: `Null` є змінною, значення якої не визначено.

* **Undefined**: це тип невизначеного літералу. Цей тип вбудованого типу є **підтипом усіх типів**.

* **Void**: тип, присвоєний методам, які мають значення, що повертається.

### Що таке модулі в Typescript?

Модулі в Typescript допомагають **упорядковувати код**. Це **набір пов'язаних змінних, функцій, класів та інтерфейсів**.

**Внутрішні** модулі тепер можна замінити за допомогою Typescript `namespace`.

**Зовнішні** модулі, які використовуються для визначення та завантаження залежностей між кількома зовнішніми файлами js. Якщо використовується лише один файл js, то зовнішні модулі не мають значення.

### Як працювати з об’єктами в TypeScript? 

1. Interface
``` ts
interface User {
  id: number;
  name: string;
  isMarried: boolean;
  words: string[],
}

const misha: User = {
  id: 1,
  name: 'Misha',
  isMarried: true,
  words: [],
};
```
``` ts
/// Custom object types
interface StyleDefinition {
  [key: string]: string;
}

const styleRules2: StyleDefinition = {
  boxSizing: 'border-box',
  margin: '8px',
  backgroundColor: '#fff',
  ...
};

// Also correct
interface GrouppedUsers {
  [key: number]: User[];
}

const usersGrouppedByAge: GrouppedUsers = {
  22: [user1, user2],
  23: [user3],
  ...
};
```
2. Generics
``` ts
interface Collection<T> {
  length: number;
  items: T[];
}
```

### Що таке інтерфейс у TypeScript?

Інтерфейс — це **віртуальна структура, яка існує лише в контексті TypeScript**.

**Компілятор** TypeScript використовує інтерфейси виключно для **перевірки типу**. Коли код буде **транспільовано на цільову мову, його буде видалено з інтерфейсів**.

Інтерфейс — це просто **структурний контракт, який визначає, які властивості об’єкт повинен мати**, наприклад ім’я та тип.

Коли ви визначаєте свій інтерфейс, ви маєте на увазі, що будь-який **об’єкт** (не екземпляр класу), **наданий цьому контракту**, має бути об’єктом, що **містить властивості інтерфейсів**.

### Чим відрізняються ключові слова інтерфейс і тип у TypeScript?

На відміну від оголошення інтерфейсу, яке завжди представляє **іменований тип об'єкта**, застосування ключового слова `type` дозволяє встановити **псевдонім** для будь-якого різновиду типу, включаючи примітивні типи, типи-об'єднання і типи-перетину.

При використанні ключового слова `type` замість ключового слова `interface` втрачаються такі можливості:

* Інтерфейс може бути використаний у виразі `extends` або `implements`, а псевдонім для літералу об'єктного типу – ні.

* Інтерфейс може мати **кілька об'єднаних об'яв**, а при використанні ключового слова type ця можливість не доступна.

### Як працювати з масивами в TypeScript?

Масив можна записати двома способами:

* Використання типу елементів із `[ ]` для позначення масиву цього типу елемента:
``` ts
let list: number[] = [1,2,3,4,5];
```
1. Arrays
``` ts
const words2: string[] = [];
```
2. Type
``` ts
type UserData = [number, string, number];
const [id, name, age]: UserData = userDataFromServer;
```
3. Union   
``` ts
type Identifier = string | number;

const id1: Identifier = 1;
const id2: Identifier = 'deadbeef';
const userIds: Identifier[] = [1, 2, 'deadbeef', ...]; 
```
4. Literal type
``` ts
type PizaSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

// wrong
const size2: PizaSize = 'small';
const size3: PizaSize = 'xs';

// correct
const size1: PizaSize = 'XS';
```
5. Enum
``` ts
enum Sizes {
  XS, S, M, L, XL
}

// wrong
const size3: Sizes = 'XL';
const size4: Sizes = 0;

// correct
const size1: Sizes = Sizes.XL;
const size2: Sizes = Sizes.S;
```
``` ts
enum Sizes {
  Small: 'small';
  Mediul: 'medium';
  Large: 'large';
}

// wrong
const size3: Sizes = 'small';

// correct
const size1: Sizes = Sizes.Small;
```
6. Tuple
``` ts
const primaryColors: [string, string, string] = [
	"#ff0000",
	"#00ff00",
	"#0000ff",
];
```
* Використання **generic** типу масиву:
``` ts
let list : Array<number>=[1,2,3,4,5];
```

### Поясніть generics (узагальнення) у TypeScript

Узагальнені типи (**generics**) дозволяють створювати **компоненти** чи **функції**, які можуть працювати **з різними типами даних**, а не з одним.
``` ts
/** A class definition with a generic parameter */
class Queue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // ERROR : cannot push a string. Only numbers allowed
```

### Що таке Enum і як він реалізується в TypeScript?

`Enum` TypeScript представляє собою **структуру даних постійної довжини, яка містить набір констант**. 

Enum корисний при **отриманні властивостей або значень, які можуть бути тільки визначеною кількістю можливих значень**. Одним із поширених прикладів є значення масті однієї карти в колоді ігрових карт. **Є тільки 4 масті і не існує інших можливих значень, і ці значення наврядчи зміняться.** З цієї причини `enum` є ефективним і зрозумілим способом опису можливих мастей карт.

За замовчуванням `enum` починає нумерувати свої члени, починаючи з `0`. Ви можете змінити це, вручну встановивши значення одного з його членів. Наприклад, ми можемо замість `0` вручну встановити `1`:
``` ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

### Що таке Union type?

Union type - це набір типів, які є взаємовиключними. Тип представляє всі можливі типи одночасно. Тип профспілки створюється з оператором Union `|`, перелічуючи кожен тип і розділяючи їх.

Union type ідеально підходять для ситуації, коли **ми точно знаємо всі можливі стани**, але ми **не знаємо, коли компілюємо програму, який із них буде використано**. Наприклад, ми можемо використовувати типи об’єднань для зберігання:
* days of the week,
* color palettes,
* columns of a database table
* DOM event names,
* finite state machine states
``` ts
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function isBusinessDay(day: DayOfWeek): boolean {
  return day !== "Saturday" && day !== "Sunday";
}

isBusinessDay("Monday"); // => true
isBusinessDay("Saturday"); // => false
isBusinessDay("Whensday");
//             ^^^^^^^^ ERROR: Argument of type '"Whensday"'
// is not assignable to parameter of type 'DayOfWeek'
```
Коли **union types відомі під час компіляції**, ми можемо замість цього використовувати **генерики**, щоб забезпечити **додаткову безпеку та гнучкість типів**. Якщо типи відомі заздалегідь, немає необхідності використовувати тип об’єднання.

[Article](https://camchenry.com/blog/typescript-union-type)

### Які є universal та impossible типи?

## Any 

У деяких ситуаціях доступна не вся інформація про тип, або її оголошення вимагатиме неадекватних зусиль. Це може статися для значень із коду, написаного без TypeScript або сторонньої бібліотеки. У цих випадках ми можемо відмовитися від перевірки типу. Для цього ми позначаємо ці значення `any` типом.

`any` тип є потужним способом роботи з існуючим JavaScript, що дозволяє вам поступово **вмикати та відмовлятися від перевірки типу під час компіляції.**

На відміну від `unknown`, змінні типу `any` дозволяють **отримати доступ до довільних властивостей, навіть тих, яких не існує. Ці властивості включають функції, і TypeScript не перевірятиме їх існування чи тип**:
``` ts
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
strictlyTyped.toFixed();
// Object is of type 'unknown'.
```

Зрештою, пам’ятайте, що вся зручність `any` приходить ціною **втрати безпеки типу**. Безпека типів є однією з головних мотивацій для використання TypeScript, і ви повинні намагатися уникати використання `any`, коли це не потрібно.

## Never

Тип `never` представляє **тип значень, які ніколи не виникають**. Наприклад, `never` є типом повернення для виразу функції або виразу функції зі стрілкою, який завжди викликає виключення або ніколи не повертає. Змінні також набувають типу `never`, коли звужуються будь-якими типами, які ніколи не можуть бути істинними.

Тип `never` є **підтипом** і може бути призначений кожному типу; однак жоден тип не є підтипом `never` (окрім самого `never`) або не може бути присвоєний йому. Навіть `any` не можна призначити `never`.
``` ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```

### Що таке explicit (явні) та inferred (виведені) типи?

**Explicit** – означає **додавання типу безпосередньо до нашої кодової бази**. Якщо ми додамо такий тип, ми точно знатимемо, який тип ми використовуємо, наприклад:
``` ts
const animal: string = 'Tiger';
```

**Implicit** – означає, що **тип може бути виведений системою виведення TypeScript, якщо немає явної анотації типу**:
``` ts
const animal = 'Tiger';
```

1. **Передача аргументів** – іноді бажано додавати **явну** анотацію типу, коли TypeScript не має достатнього контексту для виведення типів, наприклад параметрів функції:
``` ts
const getAnimal = (animal) => animal;
```

2. **Швидше виявлення помилок** – іноді **явна** анотація типу може заощадити час на налагодження та пошук помилки.
``` ts
interface Animal {
  id: number;
  name: string;
}

const animal = {
  id: '1',
  name: 'Elephant',
};

const getAnimal = (animal: Animal) => animal;

getAnimal(animal);
```

3. **Explicit help infer types** – це свого роду парадокс, але кожного разу, коли ми додаємо **явний** тип, ми допомагаємо TypeScript **виводити** типи. 

[Article](https://www.typescriptlang.org/docs/handbook/type-inference.html)