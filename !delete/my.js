// getTriathlonDistance
/**
 * @param {number} distance
 *
 * @returns {Object|string}
 * 
 */
function getTriathlonDistance(distance) {
  // write code here
  const allDistance = 226.31;

  if (distance === 0) {
    return 'Starting Line... Good Luck!';
  }

  if (distance < 3.86) {
    return { swim: `${(allDistance - distance).toFixed(2)} to go!` };
  }

  if (distance < 184.11) {
    return { bike: `${(allDistance - distance).toFixed(2)} to go!` };
  }

  if (distance < 226.31) {
    const result = (allDistance - distance).toFixed(2).toString();

    return { run: `${+result} to go!` };
  }

  if (distance >= 226.31) {
    return 'You\'re done! Stop running!';
  }
}

//   countBoxes
/**
* @param {string} boxes
*
* @returns {Object}
*/
function countBoxes(boxes) {
  // write code here
  const countedBoxes = {};

  for (let i = 0; i < boxes.length; i++) {
    if (countedBoxes[boxes[i]] !== undefined) {
      countedBoxes[boxes[i]] = countedBoxes[boxes[i]] + 1;
    } else {
      countedBoxes[boxes[i]] = 1;
    };
  };

  return countedBoxes;
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
  // write code here
  // users.fullName.split('');
  // users.firstName = fullName[0];
  for (const key in users) {
    if (users[key].firstName === undefined) {
      users[key].firstName = users[key].fullName.replace(/ [\s\S]+/, '');
    }
  }
}

// canTheyBook

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  const adults = adultsCount;
  const children = childrenCount;

  if (adults > 0 && adults + children <= 8 && children <= 5) {
    return true;
  }

  return false;
}

// canTheyBook

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
// recommendRoom

/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 * @param {number} babiesCount
 *
 * @returns {string}
 */
function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  // write code here
  const totalCount = adultsCount + childrenCount + babiesCount;

  if (totalCount <= 4) {
    return 'small room';
  }

  if (totalCount <= 5 && babiesCount > 0) {
    return 'small room + extra bed';
  }

  if (totalCount <= 8) {
    return 'big room';
  }

  if (totalCount <= 9 && babiesCount > 0) {
    return 'big room + extra bed';
  }
}

//  EXTRA TASK

// colorStones

/**
 * @param {string} stones
 *
 * @returns {number}
 */
// TODO: update code
function colorStones(stones) {
  // write code here
  let result = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === stones[i - 1]) {
      result++;
    }
  }

  return result;
}


// getProductId

/**
 * @param {string} url
 *
 * @returns {string}
 */
function getProductId(url) {
  // write code here
  const result = url.split('-').slice(-2, -1);

  return result.toString();
}


// getLeaders

/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function getLeaders(numbers) {
  let sumRight = 0;
  const result = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sumRight) {
      result.unshift(numbers[i]);
    }
    sumRight += numbers[i];
  }

  return result;
}

// getRowWeights

/**
 * @param {numbers[]} people
 *
 * @returns {numbers[]}
 */
function getRowWeights(people) {
  const commandOne = [];
  const commandTwo = [];

  for (let i = 0; i < people.length; i++) {
    if (i % 2 === 0) {
      commandOne.push(people[i]);
    } else {
      commandTwo.push(people[i]);
    }
  }

  return [commandOne.reduce((a, b) => a + b, 0),
  commandTwo.reduce((a, b) => a + b, 0)];
}

// getKiller

/**
 * @param {Object} suspects
 * @param {string[]} dead
 *
 * @returns {string|undefined}
 */
function getKiller(suspects, dead) {
  for (const key in suspects) {
    let same = 0;

    for (let i = 0; i < dead.length; i++) {
      if (suspects[key].includes(dead[i])) {
        same++;
      }

      if (same === dead.length) {
        return key;
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
  // write code here
  const online = [];
  const away = [];
  const offline = [];
  const result = {};

  for (const i in friends) {
    if (friends[i].status === 'online'
      && friends[i].lastActivity <= 10) {
      online.push(friends[i].username);
      result.online = online;
    } else if (friends[i].status === 'offline') {
      offline.push(friends[i].username);
      result.offline = offline;
    } else {
      away.push(friends[i].username);
      result.away = away;
    }
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
  // write code here
  const obj = {};
  const result = [];

  for (const type of colors) {
    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
  }

  for (const i in obj) {
    result.push(Math.floor(obj[i] / 2));
  }

  if (result.length > 0) {
    return result.reduce(function (a, b) {
      return a + b;
    });
  } else {
    return 0;
  }
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
  // write code here
  if (principal <= 0 || desired <= 0 || !principal) {
    return 0;
  } else {
    return Math.ceil(
      Math.log(desired / principal)
      / Math.log(1 + interest * (1 - tax)),
    );
  }
}

// shortenToDate

/**
 * @param {string} longDate
 *
 * @returns {string}
 */
function shortenToDate(longDate) {
  const newDate = longDate.split(',');

  return newDate.shift();
}

// getPersistence

/**
 * @param {number} num
 *
 * @returns {number}
 */
function getPersistence(num) {
  let numString = num.toString();
  let updatedNum = 1;
  let mult = 0;

  if (numString.length === 1) {
    return mult;
  }

  while (numString.length !== 1) {
    for (const ch of numString) {
      updatedNum = updatedNum * ch;
    }
    numString = updatedNum.toString();

    updatedNum = 1;
    mult++;
  }

  return mult;
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
  if (start > end) {
    return 0;
  } else {
    let sum = 0;

    for (let i = start; i <= end; i += step) {
      sum += i;
    }

    return sum;
  }
}

// sumOfMultiples

/**
 * @param {number} num
 *
 * @returns {number}
 */
function sumOfMultiples(num) {
  // write code here
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
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
  return Number(('' + num)
    .split('')
    .map(function (val) {
      return val * val;
    })
    .join(''));
}

// mumble

/**
 * @param {string} letters
 *
 * @returns {string}
 */
function mumble(letters) {
  return letters
    .split('')
    .map((x, index) =>
      x.toUpperCase() + Array(index + 1)
        .join(x.toLowerCase()))
    .join('-');
}

// getMiddleChar

/**
 * @param {string} word
 *
 * @returns {string}
 */
function getMiddleChar(word) {
  return word
    .substr(Math
      .ceil(word.length / 2 - 1), word.length % 2 === 0 ? 2 : 1);
}

// 

/**
 * @param {string} word
 *
 * @returns {string}
 */
function encodeDuplicates(word) {
  // write code here
  return word
    .toLowerCase()
    .split('')
    .map(function(a, i, w) {
      return w.indexOf(a) === w.lastIndexOf(a) ? 'x' : 'y';
    })
    .join('');
}

// isPerfectNum

/**
 * @param {number} num
 *
 * @returns {boolean}
 */
function isPerfectNum(num) {
  // write code here
  let result = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }

  if (result === num && result !== 0) {
    return true;
  } else {
    return false;
  }
}

// getSum

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */
function getSum(a, b) {
  let result = 0;

  if (a === b) {
    return a;
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  }

  return result;
}

// fixString

/**
 * @param {string} str
 *
 * @returns {string}
 */
function fixString(str) {
  // write code here
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    counter += str.charCodeAt(i) < 97 ? 1 : -1;
  }

  return counter > 0 ? str.toUpperCase() : str.toLowerCase();
}

// getLikes

/**
 * @param {string[]} names
 *
 * @returns {string}
 */
function getLikes(names) {
  // If you have a too long string add the next comment above it
  // eslint-disable-next-line max-len
  switch (names.length) {
    case 0:
      return 'No one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default:
      return names[0] + ', ' + names[1]
        + ' and ' + (names.length - 2) + ' others like this';
  }
}

// isPangram

'use strict';

/**
 * @param {string} str
 *
 * @returns {boolean}
 */
function isPangram(str) {
  const strArr = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}

// maxAndMin

/**
 * @param {string} numbersString
 *
 * @returns {string}
 */
function maxAndMin(numbersString) {
  // write code here
  const arr = numbersString.trim().split(' ');
  let minNumber = arr[0];
  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== '' && +minNumber > +arr[i]) {
      minNumber = arr[i];
    }

    if (arr[i] !== '' && +maxNumber < +arr[i]) {
      maxNumber = arr[i];
    }
  }

  return `${maxNumber} ${minNumber}`;
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
  let result = initial;
  let count = 0;

  for (let years = 0; result < target; years++) {
    result = Math.floor(result + result * percent / 100 + migration);
    count++;
  }

  return count;
}

// getShortestSteps 

/**
 * @param {number} num
 *
 * @returns {number}
 */
function getShortestSteps(num) {
  let counter = 0;
  let number = num;

  while (number > 1) {
    number = number % 2 ? number - 1 : number / 2;
    counter++;
  }

  return counter;
}

// getFibonacciNumber

/**
 * @param {number} n
 *
 * @returns {number}
 */
function getFibonacciNumber(n) {
  if (n <= 1) {
    return n;
  } else {
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
  }
}

// isPalindrome

/**
 * @param {string} str
 *
 * @returns {boolean}
 */
function isPalindrome(str) {
  const removeChar = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
  const checkPalindrome = removeChar.split('').reverse().join('');

  return (removeChar === checkPalindrome);
}

// countVowels

/**
 * @param {string} str
 *
 * @returns {number}
 */
function countVowels(str) {
  const lowStr = str.toLowerCase();
  let count = 0;
  const vowels = 'aeiou';

  for (const char of lowStr) {
    if (vowels.includes(char)) {
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
  // write code here
  const withoutZero = [];
  const arrZero = [];

  for (const char of arr) {
    if (char === 0) {
      arrZero.push(char);
      continue;
    }
    withoutZero.push(char);
  }

  return withoutZero.concat(arrZero);
}

// getNextSmaller

/**
 * @param {number} num
 *
 * @returns {number}
 */
function getNextSmaller(nums) {
  const min = minifyNumber(nums);

  for (let i = nums - 1; i >= min; i--) {
    if (minifyNumber(i) === min) {
      return i;
    }
  }

  return -1;
}

const minifyNumber = (nums) => nums
  .toString()
  .split('')
  .sort()
  .join('')
  .replace(/^(0+)([1-9])/, '$2$1');

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
  // write code here
  if (nums.length < 1) {
    return NaN;
  }

  let firstMin = nums[0];
  let secondMin = nums[1];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] < firstMin && firstMin >= secondMin) {
      firstMin = nums[i];
      continue;
    }

    if (nums[i] < secondMin) {
      secondMin = nums[i];
      continue;
    }
  }

  return firstMin + secondMin;
}

// rgbToHex

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 *
 * @returns {string}
 */
function rgbToHex(...args) {
  const hex = args.map(el => {
    if (el > 255) {
      return (255).toString(16);
    }

    if (el < 0) {
      return '00';
    }

    const convertedToHex = el.toString(16);

    return convertedToHex.length !== 2 ? '0' + convertedToHex : convertedToHex;
  });

  return hex.join('').toUpperCase();
}

// getComplementaryColor

function getComplementaryColor(hexColor) {
  const NUMBER_OF_HEX_CHARS = 6;
  const NUMBER_OF_CHARS_IN_BASE_16 = 15;

  if (hexColor.length > NUMBER_OF_HEX_CHARS) {
    throw new Exception('Error');
  }

  let modifiedHex = hexColor;

  if (hexColor.length < NUMBER_OF_HEX_CHARS) {
    const missedLength = NUMBER_OF_HEX_CHARS - hexColor.length;
    const missingChars = new Array(missedLength + 1).join('0');

    modifiedHex = missingChars + modifiedHex;
  }

  let complementaryColor = '';

  for (const char of modifiedHex) {
    const is16BaseNumber = isNaN(parseInt(char, 16));

    if (is16BaseNumber) {
      throw new Exception('Error');
    }

    const diff = NUMBER_OF_CHARS_IN_BASE_16 - parseInt(char, 16);

    complementaryColor += diff.toString(16);
  }

  return '#' + complementaryColor.toUpperCase();
}

// maskifyStr

/**
 * @param {string} str
 *
 * @returns {string}
 */
function maskifyStr(str) {
  // write code here
  let count = '';
  const result = str.slice(-4);

  if (str.length > 4) {
    for (let i = 0; i < str.length - 4; i++) {
      count += '#';
    }

    return count + result;
  } else {
    return str;
  }
}

// getCardIssuer

/**
 * @param {number} number
 *
 * @returns {string}
 */
function getCardIssuer(number) {
  // write code here
  if (number === undefined) {
    return 'Unknown';
  }

  const num = number.toString();
  const num1 = num.substr(0, 2);
  const num2 = num.substr(0, 4);
  const num3 = num.substr(0, 1);

  if ((num1 === '34' || num1 === '37') && num.length === 15) {
    return 'AMEX';
  } else if (num1 >= '51' && num1 <= '55' && num.length === 16) {
    return 'Mastercard';
  } else if (num2 === '6011' && num.length === 16) {
    return 'Discover';
  } else if (num3 === '4' && (num.length === 13 || num.length === 16)) {
    return 'VISA';
  } else {
    return 'Unknown';
  }
}

// addDigits

/**
 * @param {number} num
 *
 * @returns {number}
 */
function addDigits(num) {
  if (num === undefined) {
    return undefined;
  }

  // write code here
  if (num.toString().length === 1) {
    return num;
  }

  const New = num
    .toString()
    .split('')
    .reduce((accumulate, current) => accumulate + Number(current), 0);

  return addDigits(New);
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
  // write code here
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
  // write code here
  const copy = { ...robot };

  copy.serial = robot.serial + 1;

  return copy;
}

// upgradeRobot

/**
 * @param {Object} robot
 * @param {Object[]} parts
 */
function upgradeRobot(robot, parts) {
  // write code here
  const result = Object.assign(robot, ...parts);

  return result;
}

// calculateCost

/**
 * @param {Object} bucket
 * @param {Object} products
 *
 * @returns {number}
 */
function calculateCost(bucket, products) {
  // write code here
  let total = 0;

  for (const item in bucket) {
    for (const market in products) {
      if (item in products[market]) {
        total += products[market][item] * bucket[item];
        break;
      }
    }
  }

  return total;
}

// countDuplicates

/**
 * @param {string} str
 *
 * @returns {number}
 */
function countDuplicates(str) {
  return (str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/([^])\1+/g)
    || [])
    .length;
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

  const dir = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  for (let i = 0; i < walk.length; i++) {
    dir[walk[i]]++;
  }

  if (dir.n !== dir.s || dir.w !== dir.e) {
    return false;
  } else {
    return true;
  }
}

// findAllAnagrams

/**
 * @param {string} string
 * @param {string} chars
 *
 * @returns {number[]}
 */
function findAllAnagrams(s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;

  for (let i = 0; i < sLen; i++) {
    if (p.includes(s[i])) {
      let temp = p;
      let cur = true;

      for (let j = i; j < i + pLen; j++) {
        if (!temp.includes(s[j])) {
          cur = false;
          break;
        } else {
          const tempIdx = temp.indexOf(s[j]);

          temp = temp.slice(0, tempIdx) + temp.slice(tempIdx + 1);
        }
      }

      if (cur) {
        res.push(i);
      }
    }
  }

  return res;
}

// findSingleNum

/**
 * @param {number[]} nums
 *
 * @returns {number}
 */
function findSingleNum(nums) {
  const sorted = nums.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i] && sorted[i + 1] !== sorted[i]) {
      return sorted[i];
    }
  }
}

// isHappyNumber

/**
 * @param {number} number
 *
 * @returns {boolean}
 */
function isHappyNumber(n) {
  let sum = 0;
  let number = n;

  while (number > 0) {
    const e = number % 10;

    number = Math.floor(number / 10);
    sum += e * e;
  }

  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }

  return isHappyNumber(sum);
}

// average

const calculator = {
  average(...arr) {
    let count = 0;
    let avg = 0;

    for (let i = 0; i < arr.length; i++) {
      count++;
      avg += arr[i];
    }

    avg = avg / count;

    if (arr.length === 0) {
      avg = 0;
    }

    return avg;
  },
};

// findDuplicates

/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function findDuplicates(numbers) {
  const arr = [];
  const result = [];

  for (const num of numbers) {
    if (arr.includes(num) && !result.includes(num)) {
      result.push(num);
    }
    arr.push(num);
  }

  return result;
}

// containLetters

/**
 * @param {string} str1
 * @param {string} str2
 *
 * @returns {boolean}
 */
function containLetters(str1, str2) {
  // write code here
  let currentChars = str1;

  if (str2.length > str1.length) {
    return false;
  }

  for (const char of str2) {
    if (!str1.includes(char)) {
      return false;
    }

    const indexChar = str2.indexOf(char);

    currentChars = currentChars.slice(0, indexChar)
    + currentChars.slice(indexChar, str1.length);
  }

  return true;
}

// multiplyNums

/**
   * @param {numbers[]} nums
   *
   * @returns {number}
   */
function multiplyNums(nums) {
  let x = 0;

  const obj = {};
  let y = 0;

  for (const num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
      continue;
    }

    obj[num] += 1;
  }

  for (const key in obj) {
    if (obj[key] === 2) {
      y = +key;
    }

    if (obj[key] === 1) {
      x = +key;
    }
  }

  if (nums.length === 0) {
    return 1;
  }

  return x * x * y;
}

// countCakes

/**
 * @param {Object} recipe
 * @param {Object} available
 *
 * @returns {number}
 */
function countCakes(recipe, available) {
  let min = Infinity;

  for (const ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }

    const count = Math.floor(available[ingredient] / recipe[ingredient]);

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
  const objNum = {};
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (!objNum[numbers[i]]) {
      objNum[numbers[i]] = 1;
      continue;
    }

    objNum[numbers[i]] += 1;
  }

  const countNum = Object.values(objNum);

  for (const count of countNum) {
    if (count % 2 !== 0) {
      continue;
    }
    result += count / 2;
  }

  return result;
}

// mergeArrays

/**
 * @param {string[]} letters
 * @param {number[]} numbers
 *
 * @returns {string[]}
 */
function mergeArrays(a, b) {
  const maxLength = Math.max(a.length, b.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }

  return result.filter((value) => value !== undefined);
}

// lengthOfLastWord

/**
 * @param {string} words
 *
 * @returns {number}
 */
function lengthOfLastWord(words) {
  const arrWords = words.trim().split(' ');
  const lastWord = arrWords[arrWords.length - 1].length;

  if (arrWords.length === 0) {
    return 0;
  }

  return lastWord;
}

// add

/**
 * @param {...number} nums
 *
 * @returns {number}
 */
function add(...nums) {
  let result = 0;

  if (!nums) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    result += nums[i] * (i + 1);
  }

  return result;
}

// removeNumber

/**
 * @param {number[]} nums
 * @param {number} target
 *
 * @returns {number[]}
 */
function removeNumber(nums, target) {
  const result = [nums[0]];

  if (nums.length === 0) {
    return [];
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + result[result.length - 1] !== target) {
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
  const sortedArr = prices.sort();
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length - 1];

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
  const holder = [];

  for (let i = 0; i < nums1.length; i++) {
    let hasNextGreaterElement = false;

    // try to serach for next greater element
    for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
      // handle case for next greater element is found
      if (nums2[j] > nums1[i]) {
        holder.push(nums2[j]);
        hasNextGreaterElement = true;
        break;
      }
    }

    // handle case for next greater element is not found
    if (!hasNextGreaterElement) {
      holder.push(-1);
    }
  }

  return holder;
}

// generateSequence

/**
 * @param {number} num
 * @param {any|function} pattern
 *
 * @returns {any[]}
 */
function generateSequence(num, pattern) {
  const arr = [];

  if (typeof pattern !== 'function') {
    for (let i = 0; i < num; i++) {
      arr.push(pattern);
    }
  } else {
    for (let j = 0; j < num; j++) {
      arr.push(pattern(j, pattern));
    }
  }

  return arr;
}

// compose

function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments));
  };
}

// removeStrings

/**
 * @param {(string|number)[]} values
 *
 * @returns {number[]}
 */
function removeStrings(arr) {
  const filteredArr = arr.filter(num => typeof num === 'number');

  return filteredArr;
}

// reverseWords

/**
 * @param {string} str
 *
 * @returns {string}
 */
function reverseWords(str) {
  const filteredArr = str
    .split(' ')
    .map(word =>
      word
        .split('')
        .reverse()
        .join(''),
    );

  return filteredArr.join(' ');
}

// findAnagrams

/**
 * @param {string} word
 * @param {string[]} words
 *
 * @returns {string[]}
 */
function findAnagrams(word, words) {
  const sortedWords = word
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

  const sortedArr = words
    .filter(el => (el
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('') === sortedWords));

  return sortedArr;
}
