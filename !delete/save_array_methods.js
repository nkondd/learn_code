// push

// Save all passed arguments to args array
numbers.push = function (...args) {
  for (const arg of args) {
    // (this.length - 1) is the index of the current last element
    // so the next index is this.length
    this[this.length] = arg;
    // After adding one element the length increases
    // so the next element is added at the next index
  }

  // Original method push returns new length of changed array
  return this.length;
};

// pop

numbers.pop = function() {
  if (this.length === 0) {
    // No need to remove elements
    return;
  }

  // Save the last element to return it later
  const removedElement = this[this.length - 1];

  // Shorten an array (old last element is not available any more)
  this.length -= 1;

  return removedElement;
};

// shift

numbers.shift = function() {
  // You cannot remove an element from an empty array
  if (this.length === 0) {
    return;
  }

  // Save the deleted element to return it at the end
  const deletedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    // Move the current element to the previous place
    this[i - 1] = this[i];
  }

  // Shorten the array
  this.length--;

  return deletedElement;
};

// indexOf

numbers.indexOf = function (searchElement, fromIndex = 0) {
  let index = fromIndex;

  // fromIndex -3 means the 3rd element from the end
  // this.length - 3 === -3 + this.length
  if (index < 0) {
    index += this.length;
  }

  // If the index is still negative, we set start iteration from 0
  if (index < 0) {
    index = 0;
  }

  for (let i = index; i < this.length; i++) {
    // We return an index of the element that is equal to the searchElement
    if (searchElement === this[i]) {
      return i;
    }
  }

  // If searchElement was not found we should return -1
  return -1;
};

//   includes

numbers.includes = function (searchElement, fromIndex = 0) {
  let index = fromIndex;

  // fromIndex -3 means the 3rd element from the end
  // this.length - 3 === -3 + this.length
  if (index < 0) {
    index += this.length;
  }

  // If the index is still negative, we set start iteration from 0
  if (index < 0) {
    index = 0;
  }

  for (let i = index; i < this.length; i++) {
    // We return true if the we found searchElement is the array
    if (searchElement === this[i]) {
      return true;
    }
  }

  // If searchElement was not found we should return false
  return false;
};

//   reverse

numbers.reverse = function () {
  // We iterate only the first half not to swap elements twice
  for (let i = 0; i < this.length / 2; i++) {
    // we are going to swap elements at symmetric positions
    // 0 <--> this.length - 1 (the first with the last)
    // 1 <--> this.length - 2 (the 2nd with the pre last) ...
    const symmetricIndex = this.length - 1 - i;
    const symmetricElement = this[symmetricIndex]; // save an element from the symmetricIndex
    this[symmetricIndex] = this[i]; // put current element at symmetricIndex
    this[i] = symmetricElement; // put symmetricElement at current index
  }

  // we should also return a link to the reversed array
  return this;
};

/**
 * @param {number} begin
 * @param {number} end
 *
 * @return {number[]}
 */
numbers.slice = function(start = 0, end = this.length) {
  // if we don't pass start or end we should take all the elements

  // if start or end are out of the range for current array (< 0 or > this.length)
  // we should normalize them not to iterate non existing indexes
  const normalizedStart = normalize(start, this.length);
  const normalizedEnd = normalize(end, this.length);
  
  const result = [];

  // We take only elements from a given range
  for (let i = normalizedStart; i < normalizedEnd; i++) {
    result[result.length] = this[i];
  }

  return result;
};

function normalize(index, length) {
  // If the index is too large then return the length
  if (index > length) {
    return length;
  }
  
  let normalizedIndex = index;

  // index -3 means the 3rd element from the end
  // it is (this.length - 3) or (-3 + this.length)
  // so we add this.length to negative index
  if (normalizedIndex < 0) {
    normalizedIndex += length;
  }

  // If the index is still negative (after adding this.length)
  // we set it to 0
  if (normalizedIndex < 0) {
    normalizedIndex = 0;
  }

  return normalizedIndex;
}

// unshift

numbers.unshift = function(...args) {
  // To insert new elements at the beginning, we must first move
  // the existing ones to the right by the required number of positions (args.length)
  for (let i = this.length - 1; i >= 0; i--) {
    this[i + args.length] = this[i];
  }

  // When old elements are shifted we can insert new ones
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }

  return this.length;
};

// filter

numbers.filter = function(callback) {
  // Filter method creates a new array
  const filteredItems = [];

  for (let i = 0; i < this.length; i++) {
    // Callback function accepts 3 arguments: element, index, array
    const shouldBeAdded = callback(this[i], [i], this);

    // if the callback returned a truthy value
    if (shouldBeAdded) {
      // Add current element to the end of filteredItems
      filteredItems[filteredItems.length] = this[i];
    }
  }

  return filteredItems;
};

// map

numbers.map = function(callback) {
  // Map creates а new array
  const mappedItems = [];

  for (let i = 0; i < this.length; i++) {
    // Save the callback result to the end of mappedItems
    mappedItems[mappedItems.length] = callback(this[i], i, this);
  }

  return mappedItems;
};

// find

numbers.find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    const isFound = callback(this[i], i, this);

    if (isFound) {
    // We return the first element for which the callback returns a truthy value
      return this[i];
    }
  }
  // if nothing found we should return undefined
};

// findIndex

numbers.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);

    if (result) {
      // If the callback returned a truthy value
      // then we found an index and can finish
      return i;
    }
  }
  // If the element is not found, we should return -1

  return -1;
};

// some

numbers.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // callback returned a truthy value
      // so we found an element and can return true
      return true;
    }
  }
  // If the element was not found, we return false

  return false;
};

// every

/**
 * @param {function} callback
 *
 * @returns {boolean}
 */
numbers.every = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      // If the callback returns a falsy value for some element
      // it makes no sense to continue the iteration, so we return false
      return false;
    }
  }

  // If did not finish the function in the loop
  // It means the callback always returned truthy values
  return true;
};

// getCenturies

/**
 * @param {number[]} years
 *
 * @returns {number[]}
 */
function getCenturies(years) {
  // 18 century lasts from 1701 to 1800
  // So we can divide a year by 100 and round the result up
  // century = Math.ceil(year / 100);
  // We do it for each year in the array
  return years.map(year => Math.ceil(year / 100));
};

// mapDatabase

/**
 * @param {Array[]} people
 *
 * @returns {Object[]}
 */
function mapDatabase(people) {
  return people.map(person => {
    // Each person is an array with firstName and lastName
    const [firstName, lastName] = person;

    // we create an object with firstName and lastName
    return {
      firstName,
      lastName,
    };
  });
}

// const mapDatabase = people => people.map(
//   ([firstName, lastName]) => ({ firstName, lastName }),
// );

// filterPeople

/**
 * @param {Object[]} people
 *
 * @returns {Object[]}
 */
function filterPeople(people) {
  return people.filter(
    //  We add a person with a short firstName or a long lastName
    person => person.firstName.length <= 4 && person.lastName.length > 8,
  );
}

// getPersonById

/**
 * @param {number} id
 * @param {Object[]} people
 *
 * @returns {Object}
 */
function getPersonById(id, people) {
  return people.find(item => item.id === id)
      || null;
}

// getPersonIndex

/**
 * @param {Object[]} people
 * @param {string} nameEndsWith
 *
 * @returns {number}
 */
const getPersonIndex = (people, nameEndsWith) => {
  const index = people.findIndex(
    item => item.firstName.endsWith(nameEndsWith),
  );

  return index === -1 ? null : index;
};

// getEmployeesList

/**
 * @param {Object[]} people
 *
 * @returns {string[]}
 */
function getEmployeesList(people) {
  return people
    .map(person => `${person.firstName} ${person.lastName}`) // create an array of full names
    .sort((nameA, nameB) => nameA.localeCompare(nameB)); // and sort them alphabetically
}

// sortRobotsByVersion

/**
 * @param {Object[]} robots
 */
function sortRobotsByVersion(robots) {
  // to compare numbers, we can just subtract them
  robots.sort((robotA, robotB) => robotB.ver - robotA.ver);

  // sort method changes an array in place so we should not return it
}

// getAverageAge

/**
 * @param {number[]} ages
 *
 * @returns {number}
 */
function getAverageAge(ages) {
  // An average value for an empty array is 0
  if (!ages.length) {
    return 0;
  }

  // sum all ages to calculate average
  const sumOfAge = ages.reduce((sum, age) => sum + age, 0);
  const averageAge = sumOfAge / ages.length;

  return Math.round(averageAge);
}
