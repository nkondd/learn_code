// calculate

/**
 * @callback operationCallback
 * @param {number} operand1
 * @param {number} operand2
 */

/**
 * @param {number[]} operands
 * @param {operationCallback} operation
 *
 * @returns {number}
 */
function calculate(operands, operation) {
  const result = operation(operands[0], operands[1]);

  return result;
}

// getResult

/**
 * @param {[]} params
 * @param {function} callback
 */
function getResult(params, callback) {
  // call callback with all the given params
  return callback(...params);
}

// formatMessage

/**
 * @callback Callback
 * @param {string} word
 */

/**
 * @param {string} message
 * @param {Callback} callback
 *
 * @returns {string}
 */
function formatMessage(message, callback) {
  const words = message.split(' ');
  let result = '';

  for (const word of words) {
    result += callback(word) + ' ';
  }

  return result.trim();
}

// processArray

/**
 * @param {Object[]} items
 * @param {function} callback
 */
function processArray(items, callback) {
  const result = [];
  const itemsCopy = [...items];

  items.length = 0;

  for (const item of itemsCopy) {
    items.push(callback(item));
  }
}

// offerRoom

/**
 * @param {function} getClientStatus
 * @param {function} offerStandardRoom
 * @param {function} offerLuxuriousRoom
 *
 * @returns {string}
 */
function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  }

  return offerStandardRoom();
}

// getFirstBadVersion

/**
 * @param {function} checkVersion
 * @param {number} currentVersion
 *
 * @returns {number}
 */
function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = currentVersion; i >= 1; i--) {
    if (checkVersion(i) === false) {
      return i + 1;
    }
  }
}
