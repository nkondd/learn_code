/**
 * @param {number} distance
 *
 * @returns {number|string}
 */
 function getTriathlonDistance(distance) {
    if (distance === 0) {
      return 'Starting Line... Good Luck!';
    }
  
    const swimming = 3.86;
    const biking = 180.25;
    const running = 42.2;
  
    const totalDistance = swimming + biking + running;
  
    if (distance >= totalDistance) {
      return 'You\'re done! Stop running!';
    }
  
    // round to 2 decimal places
    const diff = +(totalDistance - distance).toFixed(2);
    const message = `${diff} to go!`;
  
    if (distance < swimming) {
      return { swim: message };
    }
  
    if (distance < biking + swimming) {
      return { bike: message };
    }
  
    return { run: message };
  }
  
//   restoreNames

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} fullName
 *
 * @param {User[]} users
 */
 function restoreNames(users) {
    for (const user of users) {
      if (user.firstName) {
        continue;
      }
  
      const parts = user.fullName.split(' ');
  
      user.firstName = parts[0];
    }
  }
  
    // canTheyBook (screenshot)

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  const adults = adultsCount;
  const children = childrenCount;

  if (adults > 0 && adults + children <= 8 && children <= 5) {
    return true;
  }

  return false;
}

// canTheyBook(screenshot)

/**
* @param {number} adultsCount
* @param {number} childrenCount
* @param {number} babiesCount
*
* @returns {boolean}
*/
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const m = childrenCount + babiesCount <= 2 * adultsCount && adultsCount > 0;
  const totalCount = adultsCount + childrenCount + babiesCount;
  const hasEnoughSpace = totalCount <= 9;
  const withoutBaby = (totalCount - babiesCount) <= 8;

  return m && hasEnoughSpace && withoutBaby;
  // write code here
}

//  EXTRA TASK 

// colorStones

/**
 * @param {string} stones
 *
 * @returns {number}
 */
 function colorStones(stones) {
  let removedCount = 0;

  for (let i = 1; i < stones.length; i++) {
    // a stone should be removed if it is equal to the previous one
    if (stones[i] === stones[i - 1]) {
      removedCount++;
    }
  }

  return removedCount;
}

// getProductId

/**
 * @param {string} url
 *
 * @returns {string}
 */
 function getProductId(url) {
  // find where productId starts
  const index = url.lastIndexOf('-p-');

  // cut last '-', 8 digit date and '.html'
  return url.slice(index + 3, -14);
}

// getLeaders

/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
 function getLeaders(numbers) {
  const result = [];
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    const n = numbers[i];

    if (n > sum) {
      result.push(n);
    }

    sum += n;
  }

  // numbers should go in the original order
  return result.reverse();
}

// getRowWeights

/**
 * @param {numbers[]} array
 *
 * @returns {numbers[]}
 */
 function getRowWeights(array) {
  const teams = [0, 0];

  for (let i = 0; i < array.length; i++) {
    // 0 - for team 1, 1 - for team 2
    teams[i % 2] += array[i];
  }

  return teams;
}

// 

/**
 * @param {Object} suspects
 * @param {string[]} dead
 *
 * @returns {string|undefined}
 */
 function getKiller(suspects, dead) {
  for (const suspectName in suspects) {
    let count = 0;

    for (const person of suspects[suspectName]) {
      for (const victim of dead) {
        if (person === victim) {
          count++;
        }
      }

      if (count === dead.length) {
        return suspectName;
      }
    }
  }
}

// whoIsOnline

/**
 * @param {Object[]} friends
 *
 * @returns {Object}
 */
 function whoIsOnline(friends) {
  const result = {};

  for (const friend of friends) {
    let status = friend.status;

    if (status === 'online' && friend.lastActivity > 10) {
      status = 'away';
    }

    if (!result[status]) {
      result[status] = [];
    }

    result[status].push(friend.username);
  }

  return result;
}

// countMatchingSocks

/**
 * @param {number[]} colors
 *
 * @returns {number}
 */
 function countMatchingSocks(colors) {
  const socksWithoutPair = {};
  let numberOfPairs = 0;

  for (const color of colors) {
    // if we already have a sock of current color
    if (socksWithoutPair[color] === 1) {
      // we have found another pair
      numberOfPairs++;
      socksWithoutPair[color] = 0;
    } else {
      socksWithoutPair[color] = 1;
    }
  }

  return numberOfPairs;
}

// calculateYears

/**
 * @param {number} principal
 * @param {number} interest
 * @param {number} tax
 * @param {number} desired
 *
 * @returns {number}
 */
 function calculateYears(principal, interest, tax, desired) {
  // The amount of money Scrooge currently has
  let current = principal;

  // A number of years that has already passed
  let years = 0;

  while (current < desired) {
    // it is the income before taxes
    const interestValue = current * interest;

    // tax is applied only to the income not the principal
    const taxValue = interestValue * tax;

    // 1 more year passed and the current amount increased
    years++;
    current += interestValue - taxValue;
  }

  return years;
}

// shortenToDate

/**
 * @param {string} longDate
 *
 * @returns {string}
 */
function shortenToDate(longDate) {
  const commaIndex = longDate.indexOf(',');

  // Comma was not found
  if (commaIndex === -1) {
    return longDate;
  }

  // take the part before the comma
  return longDate.slice(0, commaIndex);
}

// getPersistence

/**
 * @param {number} num
 *
 * @returns {number}
 */
function getPersistence(num) {
  let current = num;
  let steps = 0;

  // While the numbers has at least 2 digits
  while (current > 9) {
    // we multiply its digits
    current = multiplyDigits(current);

    // and add 1 step;
    steps++;
  }

  return steps;
}

// this function multiplies all the digits
function multiplyDigits(num) {
  let result = 1;

  // We will take digits one by one form the number
  let current = num;

  while (current > 0) {
    // The last digit is a % 10 reminder
    const lastDigit = current % 10;

    // We multiply current digit with previous
    result *= lastDigit;

    // We remove the last digit from current
    current = (current - lastDigit) / 10;
  }

  return result;
}

// calcSequenceSum

/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 *
 * @returns {number}
 */
function calcSequenceSum(start, end, step) {
  let sum = 0;

  // We start from `start`
  // finish at `end`
  // with a step of `step`
  for (let value = start; value <= end; value += step) {
    sum += value;
  }

  return sum;
}

// sumOfMultiples

/**
 * @param {number} num
 *
 * @returns {number}
 */
function sumOfMultiples(num) {
  let sum = 0;

  // Negative number will not enter the loop
  for (let value = 1; value < num; value++) {
    // Value is divisible by 3 if a % 3 reminder is 0
    const isDivisibleBy3 = (value % 3) === 0;
    const isDivisibleBy5 = (value % 5) === 0;

    if (isDivisibleBy3 || isDivisibleBy5) {
      sum += value;
    }
  }

  return sum;
}

// squareDigits

/**
 * @param {number} num
 *
 * @returns {number}
 */
function squareDigits(num) {
  // Split a text version of a number into separate digits
  const digits = `${num}`.split('');

  // We will concatenate each square to this string
  let mergedDigits = '';

  for (const digit of digits) {
    // * converts strings to number before multiplying them
    mergedDigits += digit * digit;
  }

  // we need to convert a string of digits to a number
  return +mergedDigits;
}

// mumble

/**
 * @param {string} letters
 *
 * @returns {string}
 */
function mumble(letters) {
  const parts = [];

  for (let i = 0; i < letters.length; i++) {
    // Add one capital letter and required number of small letters
    parts.push(
      letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i),
    );
  }

  return parts.join('-');
}

// getMiddleChar

/**
 * @param {string} word
 *
 * @returns {string}
 */
function getMiddleChar(word) {
  if (word.length % 2 === 1) {
    // '0123456' -> (7 - 1) / 2 === 3
    // '01234' -> (5 - 1) / 2 === 2
    const middleIndex = (word.length - 1) / 2;

    return word[middleIndex];
  }

  // Now word.length is definitelly even
  // (otherwise we would enter the if and return a value

  const half = word.length / 2;

  // '012345' -> 6 / 2 === 3
  // We take 2, 3 not including 4
  return word.slice(half - 1, half + 1);
}

// encodeDuplicates

/**
 * @param {string} word
 *
 * @returns {string}
 */
function encodeDuplicates(word) {
  // to have all the letters in lower case
  const lowerWord = word.toLowerCase();
  let result = '';

  for (const letter of lowerWord) {
    // find the first and the last occurence of the letter
    const firstIndex = lowerWord.indexOf(letter);
    const lastIndex = lowerWord.lastIndexOf(letter);

    // add 'y' if this letter has duplicates
    // otherwise 'x'
    result += (firstIndex !== lastIndex) ? 'y' : 'x';
  }

  return result;
}

// isPerfectNum

/**
 * @param {number} num
 *
 * @returns {boolean}
 */
function isPerfectNum(num) {
  // 1 is always a divisor
  let sum = 1;
  const maxDivisor = Math.sqrt(num);

  for (let divisor = 2; divisor < maxDivisor; divisor++) {
    const result = num / divisor;

    if (result % 1 !== 0) {
      // there is a decimal part
      continue;
    }

    sum += divisor;
    sum += result;
  }

  // add sqrt if it is integer
  if (maxDivisor % 1 === 0) {
    sum += maxDivisor;
  }

  return sum === num;
}

// getSum

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
function getSum(a, b) {
  // find the smallest to start from
  const start = Math.min(a, b);

  // find the biggest to end with
  const end = Math.max(a, b);

  let sum = 0;

  for (let value = start; value <= end; value++) {
    sum += value;
  }

  return sum;
}

// fixString

/**
 * @param {string} str
 *
 * @returns {string}
 */
function fixString(str) {
  // We will count all small and capital letters
  let smallsCount = 0;
  let capitalsCount = 0;

  for (const char of str) {
    // Capitals are from 'A' to 'Z'
    const isCapital = char >= 'A' && char <= 'Z';

    // Smalls are from 'a' to 'z'
    const isSmall = char >= 'a' && char <= 'z';

    if (isSmall) {
      smallsCount++;
    } else if (isCapital) {
      capitalsCount++;
    }
    // char can be ' ' so we need to check both conditions
  }

  // if === we must convert toLowerCase
  return (capitalsCount > smallsCount)
    ? str.toUpperCase()
    : str.toLowerCase();
}

// getLikes

/**
 * @param {string[]} names
 *
 * @returns {string}
 */
function getLikes(names) {
  switch (names.length) {
    case 0:
      return 'No one likes this';

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names[0]} and ${names[1]} like this`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    default:
      // eslint-disable-next-line max-len
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// isPangram

/**
 * @param {string} str
 *
 * @returns {boolean}
 */
function isPangram(str) {
  // all the alphabet letters
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  // to be able to complare with letters in abc
  const lowerStr = str.toLowerCase();

  for (const letter of abc) {
    // If at least one alphabet letter is not present in str
    if (!lowerStr.includes(letter)) {
      // then it is not a pangram
      return false;
    }
  }

  // If we checked all the alphabet letters and did return false in the loop
  // then all of them are present in the str
  return true;
}

// maxAndMin

/**
 * @param {string} numbersString
 *
 * @returns {string}
 */
function maxAndMin(numbersString) {
  // we split the string into separate numbers
  const parts = numbersString.split(' ');

  // min and max will be replaced with the first number in the loop
  let min = Infinity; // any number is less than Infinity
  let max = -Infinity; // any number is greater than -Infinity

  for (const part of parts) {
    // the part is '' if we have 2 spaces in the middle
    // or a space at the end or start
    if (part === '') {
      // we skip it
      continue;
    }

    // part is a string so we convert it
    const value = +part;

    // find the smallest value
    if (value < min) {
      min = value;
    }

    // find the biggest value
    if (value > max) {
      max = value;
    }
  }

  return `${max} ${min}`;
}

// getYears

/**
 * @param {number} initial
 * @param {number} percent
 * @param {number} migration
 * @param {number} target
 *
 * @returns {number}
 */
function getYears(initial, percent, migration, target) {
  // How many years do we need
  let yearsCount = 0;
  let currentPopulation = initial;

  // we finish when currentPopulation reaches the target
  while (currentPopulation < target) {
    const populationGrowth = currentPopulation * percent / 100;

    currentPopulation += populationGrowth + migration;
    yearsCount++;
  }

  return yearsCount;
}

// getShortestSteps

/**
 * @param {number} n
 *
 * @returns {number}
 */
function getShortestSteps(n) {
  let current = n;
  let steps = 0;

  // decrease the number until it is greater than 1
  while (current > 1) {
    steps++;

    // We divide when we can
    // to minimize a number of steps
    if (current % 2 === 0) {
      current /= 2;
    } else {
      current -= 1;
      // after subtraction the number becomes even
    }
  }

  return steps;
}

// getFibonacciNumber

/**
 * @param {number} n
 *
 * @returns {number}
 */
function getFibonacciNumber(n) {
  // the formula does not work for 0 and 1
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    // we calculate next
    const next = prev + current;

    // and save new prev and current
    prev = current;
    current = next;
  }

  // current is what we need
  return current;
}

// isPalindrome

/**
 * @param {string} str
 *
 * @returns {boolean}
 */
function isPalindrome(str) {
  // let's work only with small letters
  const lowerStr = str.toLowerCase();

  // save only letters in direct and reversed orders
  let direct = '';
  let reversed = '';

  for (const char of lowerStr) {
    if (!isLetter(char) && !isDigit(char)) {
      // we take only letters and digits
      continue;
    }

    // we add a char to the beginning of the reversed
    reversed = char + reversed;

    // and to the end of the direct
    direct += char;
  }

  return direct === reversed;
}

function isDigit(char) {
  return '0123456789'.includes(char);
}

function isLetter(char) {
  // we work only with small letters
  return char >= 'a' && char <= 'z';
}

// countVowels

/**
 * @param {string} str
 *
 * @returns {number}
 */
function countVowels(str) {
  // not to deal with capital letters
  const lowerString = str.toLowerCase();
  let count = 0;

  for (const char of lowerString) {
    if ('aeiou'.includes(char)) {
      count++;
    }
  }

  return count;
}

// moveZeros

/**
 * @param {array} arr
 *
 * @returns {string[]}
 */
function moveZeros(arr) {
  const result = [];

  for (const n of arr) {
    // add only non 0 values
    if (n !== 0) {
      result.push(n);
    }
  }

  // start from result.length
  for (let i = result.length; i < arr.length; i++) {
    // add zeros at the end
    result.push(0);
  }

  return result;
}

// getNextSmaller

/**
 * @param {number} num
 *
 * @returns {number}
 */
function getNextSmaller(num) {
  const digits = [...num.toString()];

  // we start from the last digits to find the smallest possible reduce
  for (let i = digits.length - 2; i >= 0; i--) {
    const current = digits[i];
    const next = digits[i + 1];

    if (current <= next) {
      // we can't reduce the number at this index
      // because all the next digits are not less
      continue;
    }

    // All the digits to the right are sorted in the ascending order

    // find the largest digit to the right that is less than current
    let indexToReplace = i + 1;

    while (digits[indexToReplace] < current) {
      indexToReplace++;
    }

    // and swap the digits
    digits[i] = digits[indexToReplace - 1];
    digits[indexToReplace - 1] = current;

    // take the first digits up to the current one
    let result = digits.slice(0, i + 1).join('');

    // take the rest digits in the reversed order
    // to get the max possible tail for the new number
    for (let j = digits.length - 1; j > i; j--) {
      result += digits[j];
    }

    if (result[0] === '0') {
      // the number can't start with 0
      return -1;
    }

    return +result;
  }

  // we did not find the digit to reduce
  return -1;
}

// countOnes

'use strict';

/**
 * @param {number} start
 * @param {number} end
 *
 * @returns {number}
 */
function countOnes(start, end) {
  let numberOfOnes = 0;

  for (let i = start; i <= end; i++) {
    const binary = i.toString(2);

    for (const num of binary) {
      if (num === '1') {
        numberOfOnes++;
      }
    }
  }

  return numberOfOnes;
}

// getMinSum

/**
 * @param {numbers[]} nums
 *
 * @returns {number}
 */
function getMinSum(nums) {
  if (nums.length < 2) {
    return NaN;
  }

  let smallest = nums[0];
  let second = nums[0]; // the second small number

  for (const n of nums) {
    if (n < smallest) {
      // n is less than both
      second = smallest;
      smallest = n;
    } else if (n < second) {
      // n is less than one
      second = n;
    }
  }

  return smallest + second;
}

// rgbToHex

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 *
 * @returns {string}
 */
function rgbToHex(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

// convert 1 color to hex string
function toHex(value) {
  if (value <= 0) {
    return '00';
  }

  if (value >= 255) {
    return 'FF';
  }

  // 11 -> 'B'; 29 -> '1D'; 250 -> 'FA'
  const hex = value.toString(16).toUpperCase();

  // add leading 0 if needed
  return hex.padStart(2, '0');
}

// getComplementaryColor

/**
 * @param {string} hexColor
 *{
 * @returns {string}
 */
function getComplementaryColor(hexColor) {
  if (typeof hexColor !== 'string') {
    throw new Error();
  }

  if (hexColor.length > 6) {
    throw new Error();
  }

  // We create a number from hexColor
  const value = +`0x${hexColor}`;

  // The value is NaN if there are some non HEX charactes
  if (isNaN(value)) {
    throw new Error();
  }

  const complementaryValue = 0xFFFFFF - value;

  const complementaryString = complementaryValue
    .toString(16) // create a HEX representation of the complementaryValue
    .toUpperCase()
    .padStart(6, 0); // add leading 0 if it has < 6 characters

  // add leading `#`
  return `#${complementaryString}`;
}
  
// maskifyStr

/**
 * @param {string} str
 *
 * @returns {string}
 */
function maskifyStr(str) {
  // take last 4 characters
  const ending = str.slice(-4);

  // add '#' up to required length
  return ending.padStart(str.length, '#');
}

// getCardIssuer

/**
 * @param {number} number
 *
 * @returns {string}
 */
function getCardIssuer(number = 0) {
  const serialNo = number.toString();
  const firstTwoDigits = serialNo.slice(0, 2);

  if (serialNo.length === 15
    && ['34', '37'].includes(firstTwoDigits)
  ) {
    return 'AMEX';
  }

  if (serialNo.length === 16
    && serialNo.startsWith('6011')
  ) {
    return 'Discover';
  }

  if (serialNo.length === 16
    && ['51', '52', '53', '54', '55'].includes(firstTwoDigits)
  ) {
    return 'Mastercard';
  }

  if (serialNo.startsWith('4')
    && [13, 16].includes(serialNo.length)
  ) {
    return 'VISA';
  }

  return 'Unknown';
}

// addDigits

/**
 * @param {number} num
 *
 * @returns {number}
 */
function addDigits(num) {
  let current = num;

  // we repeat the operation while the result has at least 2 digits
  while (current > 9) {
    current = sumDigits(current);
  }

  return current;
}

function sumDigits(value) {
  let sum = 0;

  // take each number digit
  for (const digit of value.toString()) {
    // add it to the sum as a number (not just character)
    sum += +digit;
  }

  return sum;
}

// registerRobot

/**
 * @typedef {Object} Robot
 * @property {number} id
 * @property {string} skill
 * @property {Warehouse} currentWorkPlace
 *
 * @typedef {Object} Warehouse
 * @property {number[]} aiStaff
 * @property {number} boxes
 * @property {string} currentStatus
 *
 * @param {Robot} robot
 * @param {Warehouse} warehouse
 */
function registerRobot(robot, warehouse) {
  warehouse.aiStaff.push(robot.id);
  robot.currentWorkPlace = warehouse;
}

// createRobotCopy

/**
 * @typedef {Object} Robot
 * @property {number} serial
 * @property {string} name
 * @property {number} wheels
 *
 * @param {Robot} robot
 *
 * @returns {Robot}
 */
function createRobotCopy(robot) {
  return {
    ...robot, // copy all props from robot
    serial: robot.serial + 1, // set correct serial
  };
}

// upgradeRobot

/**
 * @param {Object} robot
 * @param {Object[]} parts
 */
function upgradeRobot(robot, parts) {
  for (const part of parts) {
    Object.assign(robot, part); // add each part to robot object
  }

  // Or you can just do it at once
  // Object.assign(robot, ...parts);
}

// calculateCost

/**
 * @param {Object} bucket
 * @param {Object} products
 *
 * @returns {number}
 */
function calculateCost(bucket, products) {
  // Each value of a `products` object is an object with prices for some details (like a store)
  const stores = Object.values(products);

  // Copy prices from all stores to a single object
  const pricing = Object.assign({}, ...stores);
  let totalPrice = 0;

  for (const product in bucket) {
    // Get final product price: price * quantity
    const productPrice = pricing[product];
    const productQuantity = bucket[product];

    totalPrice += productPrice * productQuantity;
  }

  return totalPrice;
}

// calculateCost

/**
 * @param {Object} bucket
 * @param {Object} products
 *
 * @returns {number}
 */
function calculateCost(bucket, products) {
  // Each value of a `products` object is an object with prices for some details (like a store)
  const stores = Object.values(products);

  // Copy prices from all stores to a single object
  const pricing = Object.assign({}, ...stores);
  let totalPrice = 0;

  for (const product in bucket) {
    // Get final product price: price * quantity
    const productPrice = pricing[product];
    const productQuantity = bucket[product];

    totalPrice += productPrice * productQuantity;
  }

  return totalPrice;
}

// countDuplicates

/**
 * @param {string} str
 *
 * @returns {number}
 */
function countDuplicates(str) {
  // make all characters small to ignore case
  const lowerStr = str.toLowerCase();

  // count occurances of each char like this:
  // { s: 1, m: 1, a: 1, l: 2 }
  const charCounts = {};

  for (const char of lowerStr) {
    // of `char` is not in `charCounts` yet we get `undefined`,
    // otherwise we get a number (at least 1)
    if (!charCounts[char]) {
      charCounts[char] = 0;
    }

    // if it was undefined we have just set 0
    charCounts[char]++;
  }

  let count = 0;

  for (const char in charCounts) {
    // if `char` appears more than once we count it
    if (charCounts[char] > 1) {
      count++;
    }
  }

  return count;
}

// isValidWalk

/**
 * @param {string[]} walk
 *
 * @returns {boolean}
 */
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const moves = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  for (const direction of walk) {
    // count moves in each direction
    moves[direction]++;
  }

  // north and south moves compensate each othre
  // the same for west and east
  return moves.n === moves.s
    && moves.w === moves.e;
}

// findSingleNum

/**
 * @param {number[]} nums
 *
 * @returns {number}
 */
function findSingleNum(nums) {
  const numsMap = {};

  for (const n of nums) {
    if (n in numsMap) {
      // if 'n' appears the second time we delete it
      delete numsMap[n];
    } else {
      // if 'n' appears the first time we add it
      numsMap[n] = n;
    }
  }

  // all the elements that appeared twice we deleted
  // So only the single element is left in 'numsMap'
  return Object.values(numsMap)[0];
}

// isHappyNumber

/**
 * @param {number} number
 *
 * @returns {boolean}
 */
function isHappyNumber(number) {
  // save results here to check if we get the same result again
  const results = {};
  let current = number;

  while (current !== 1) {
    // if previously we had the same result
    // it makes no sense to continue
    if (results[current]) {
      return false;
    }

    // we save the result to check later if we already have the same
    results[current] = true;

    current = sumDigitSquares(current);
  }

  return true;
}

function sumDigitSquares(num) {
  let result = 0;

  for (const digit of num.toString()) {
    result += digit * digit;
  }

  return result;
}

// average

const calculator = {
  // take all arguments
  average(...values) {
    if (values.length === 0) {
      return 0;
    }

    let sum = 0;

    for (const value of values) {
      // sum all values
      sum += value;
    }

    return sum / values.length;
  },
};

// findDuplicates

/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function findDuplicates(numbers) {
  const numbersMap = {};
  const duplicates = [];

  for (const n of numbers) {
    if (!numbersMap[n]) {
      numbersMap[n] = 0;
    }

    // we count occurances
    numbersMap[n]++;

    // and add the number when it appears the second time
    if (numbersMap[n] === 2) {
      duplicates.push(n);
    }
  }

  return duplicates;
}

// containLetters

/**
 * @param {string} str1
 * @param {string} str2
 *
 * @returns {boolean}
 */
function containLetters(str1, str2) {
  const str1Letters = {};

  // count all str1 letter in str1
  for (const letter of str1) {
    if (!str1Letters[letter]) {
      str1Letters[letter] = 0;
    }

    str1Letters[letter]++;
  }

  for (const letter of str2) {
    // if current str2 letter can't be found amoung the rest of str1 letters
    if (!str1Letters[letter]) {
      return false;
    }

    // if a letter was found in str1Letters we reduce its count
    str1Letters[letter]--;
  }

  // we get here only if str1 has all the str2 letters
  return true;
}

// multiplyNums

/**
 * @param {numbers[]} nums
 *
 * @returns {number}
 */
function multiplyNums(nums) {
  const numbers = {};
  let total = 1;

  // count how many times each number occurs in the array
  for (const number of nums) {
    if (!numbers[number]) {
      numbers[number] = 0;
    }

    numbers[number]++;
  }

  for (const number in numbers) {
    if (numbers[number] === 2) {
      total *= number;
    } else if (numbers[number] === 1) {
      total *= number ** 2;
    }
  }

  return total;
}

// countCakes

/**
 * @param {Object} recipe
 * @param {Object} available
 *
 * @returns {number}
 */
function countCakes(recipe, available) {
  // By default, we can cook as many cakes as we need
  let min = Infinity;

  for (const ingredient in recipe) {
    // If we don't have some required ingredient
    if (!available[ingredient]) {
      // we can't cook any cake
      return 0;
    }

    // This ingredient is enough for count cakes
    const count = Math.floor(available[ingredient] / recipe[ingredient]);

    // We find the smallest count
    if (count < min) {
      min = count;
    }
  }

  return min;
}

// countPairs

/**
 * @param {number[]} numbers
 *
 * @returns {number}
 */
function countPairs(numbers) {
  const socksWithoutPair = {};
  let count = 0;

  for (const sock of numbers) {
    if (sock in socksWithoutPair) {
      // we found a pair for the sock
      count++;
      delete socksWithoutPair[sock];
    } else {
      socksWithoutPair[sock] = 1;
    }
  }

  return count;
}

// mergeArrays

/**
 * @param {string[]} letters
 * @param {number[]} numbers
 *
 * @returns {string[]}
 */
function mergeArrays(letters, numbers) {
  const result = [];
  const length = Math.max(letters.length, numbers.length);

  for (let i = 0; i < length; i++) {
    if (i < letters.length) {
      result.push(letters[i]);
    }

    if (i < numbers.length) {
      result.push(numbers[i]);
    }
  }

  return result;
}

// lengthOfLastWord

/**
 * @param {string} words
 *
 * @returns {number}
 */
function lengthOfLastWord(words) {
  const strToArray = words.trim().split(' ');

  if (strToArray.length === 0) {
    return 0;
  }

  return strToArray[strToArray.length - 1].length;
}

// add

/**
 * @param {...number} nums
 *
 * @returns {number}
 */
function add(...nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] * (i + 1);
  }

  return sum;
}

// removeNumber

/**
 * @param {number[]} nums
 * @param {number} target
 *
 * @returns {number[]}
 */
function removeNumber(nums, target) {
  // take the first element or nothing
  const result = nums.slice(0, 1);

  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 1];

    if (sum !== target) {
      result.push(nums[i]);
    }
  }

  return result;
}

// minAndMax

/**
 * @param {number[]} prices
 *
 * @returns {number[]}
 */
function minAndMax(prices) {
  // Math.min and max accept comma separated arguments
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
}

// findNextGreater

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 *
 * @returns {number[]}
 */
function findNextGreater(nums1, nums2) {
  const result = [];

  for (const num of nums1) {
    // the value if we can't find the greater element
    let greaterElement = -1;

    // we start searching after the same number in the second array
    for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        greaterElement = nums2[i];
        break;
      }
    }

    result.push(greaterElement);
  }

  return result;
}

// generateSequence

/**
 * @param {number} num
 * @param {any|function} pattern
 *
 * @returns {any[]}
 */
function generateSequence(num, pattern) {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (typeof pattern === 'function') {
      result[i] = pattern(i);
    } else {
      result[i] = pattern;
    }
  }

  return result;
}

// compose

function compose(func1, func2) {
  // we return a function
  // that takes all the args
  // and calls function in the correct order
  return (...args) => func1(func2(...args));
}

// removeStrings

/**
 * @param {(string|number)[]} values
 *
 * @returns {number[]}
 */
function removeStrings(values) {
  return values.filter(value => typeof value === 'number');
}

// reverseWords

/**
 * @param {string} str
 *
 * @returns {string}
 */
function reverseWords(str) {
  return str.split(' ')
    // we reverse each word
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

// findAnagrams

/**
 * @param {string} word
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function findAnagrams(word, words) {
  const result = [];
  const sortedLetters = word.split('').sort().join('');

  for (const currentWord of words) {
    const currentLetters = currentWord.split('').sort().join('');

    // we can compare because letters are sorted
    if (sortedLetters === currentLetters) {
      result.push(currentWord);
    }
  }

  return result;
}
