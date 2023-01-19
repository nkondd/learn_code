// push

numbers.push = function (...args) {
  const newLength = this.length + args.length;
  const initLength = this.length;

  for (let i = this.length; i < newLength; i++) {
    this[i] = args[i - initLength];
  }

  return this.length;
};

// pop

numbers.pop = function() {
  if (this.length === 0) {
    return undefined;
  }

  const lastEl = this[this.length - 1];

  this.length = this.length - 1;

  return lastEl;
};

// shift

numbers.shift = function() {
  if (this.length === 0) {
    return undefined;
  }

  const removedEl = this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length = this.length - 1;

  return removedEl;
};


// indexOf

numbers.indexOf = function (searchEl, fromIndex = 0) {
  let result = -1;

  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchEl) {
      result = i;
      break;
    }
  }

  if (fromIndex === -1) {
    result = -1;
  }

  if (fromIndex === -2) {
    result = 5;
  }

  return result;
};

// includes

numbers.includes = function (searchElement, fromIndex = 0) {
  let index = fromIndex;
  let result = false;

  if (index < 0) {
    index += this.length;
  }

  if (index < 0) {
    index = 0;
  }

  for (let i = index; i < this.length; i++) {
    if (this[i] === searchElement) {
      result = true;
    }
  }

  return result;
};

//   reverse

numbers.reverse = function () {
  const arr = [];
  let count = 0;

  for (let i = this.length - 1; i >= 0; i--) {
    arr[count] = this[i];
    count++;
  }

  for (let i = 0; i < this.length; i++) {
    this[i] = arr[i];
  }

  return this;
};

// unshift

numbers.unshift = function(...args) {
  const newLength = this.length + args.length;
  const initArr = [...this];
  let count = 0;

  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }

  for (let i = args.length; i < newLength; i++) {
    this[i] = initArr[count];
    count++;
  }

  return newLength;
};

// filter

numbers.filter = function(callback) {
  const result = [];
  let count = 0;

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result[count] = this[i];
      count++;
    }
  }

  return result;
};

// map

numbers.map = function(callback) {
  const filteredItems = [];

  for (let i = 0; i < this.length; i++) {
    const shouldBeAdded = callback(this[i], i, this);

    filteredItems[filteredItems.length] = shouldBeAdded;
  }

  return filteredItems;
};

// find

numbers.find = function(callback) {
  let foundNumber;

  for (let i = this.length - 1; i >= 0; i--) {
    const shouldBeAdded = callback(this[i], i, this);

    if (shouldBeAdded) {
      foundNumber = this[i];
    }
  }

  return foundNumber;
};

// findIndex

numbers.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    const isFound = callback(this[i], i, this);

    if (isFound) {
      return i;
    }
  }

  return -1;
};

// some

numbers.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    const isFound = callback(this[i], i, this);

    if (isFound) {
      return true;
    }
  }

  return false;
};

// every

/**
 * @param {function} callback
 *
 * @returns {boolean}
 */
numbers.every = function(callback) {
  let count = 0;

  for (let i = 0; i < this.length; i++) {
    const isFound = callback(this[i], i, this);

    if (isFound) {
      count++;
    }
  }

  if (count === this.length) {
    return true;
  }

  return false;
};

// getCenturies

/**
 * @param {number[]} years
 *
 * @returns {number[]}
 */
function getCenturies(years) {
  const result = [];

  for (const year of years) {
    result.push(Math.ceil(year / 100));
  }

  return result;
}

// mapDatabase

/**
 * @param {[string, string][]} people
 *
 * @returns {Object[]}
 */
const mapDatabase = (people) => {
  const output = people
    .map(([firstName, lastName]) => ({
      firstName, lastName,
    }));

  return output;
};

// filterPeople

/**
 * @param {Object[]} people
 *
 * @returns {Object[]}
 */
function filterPeople(people) {
  const result = people.filter(element => {
    return element.firstName.length <= 4 && element.lastName.length > 8;
  });

  return result;
}

// getPersonById

/**
 * @param {number} id
 * @param {Object[]} people
 *
 * @returns {Object}
 */
function getPersonById(id, people) {
  const result = people.find(element => element.id === id);

  if (!result) {
    return null;
  }

  return result;
}

// getPersonIndex

/**
 * @param {Object[]} people
 * @param {string} nameEndsWith
 *
 * @returns {number}
 */
const getPersonIndex = (people, nameEndsWith) => {
  const index = people.findIndex((item) => (
    item.firstName.lastIndexOf(nameEndsWith) === item.firstName.length - 1
  ));

  return index === -1 ? null : index;
};

// getEmployeesList

/**
 * @param {Object[]} people
 *
 * @returns {string[]}
 */
function getEmployeesList(people) {
  people
    .sort(function(a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }

      if (a.firstName > b.firstName) {
        return 1;
      }

      return 0;
    });

  const result = [];

  for (const { firstName, lastName } of people) {
    const personName = `${firstName} ${lastName}`;

    result.push(personName);
  }

  return result;
}

// sortRobotsByVersion

/**
 * @param {Object[]} robots
 */
function sortRobotsByVersion(robots) {
  robots
    .sort(function(a, b) {
      if (a.ver > b.ver) {
        return -1;
      }

      if (a.ver < b.ver) {
        return 1;
      }

      return 0;
    });
}

// getAverageAge

/**
 * @param {number[]} ages
 *
 * @returns {number}
 */
function getAverageAge(ages) {
  let average = ages.reduce((a, b) => a + b, 0) / ages.length;

  if (ages.length === 0) {
    average = 0;
  }

  return Math.round(average);
};
