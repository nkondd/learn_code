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
