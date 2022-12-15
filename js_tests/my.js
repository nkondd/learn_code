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
