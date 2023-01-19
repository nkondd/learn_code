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
  // call operation with all the given operands
  return operation(...operands);
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
  const formattedWords = [];

  for (const word of words) {
    const formattedWord = callback(word); // call callback for each word

    formattedWords.push(formattedWord);
  }

  return formattedWords.join(' ');
}

// processArray

/**
 * @param {Object[]} items
 * @param {function} callback
 */
function processArray(items, callback) {
  for (let i = 0; i < items.length; i++) {
    items[i] = callback(items[i]);
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
  const clientStatus = getClientStatus();

  if (clientStatus === 'vip') {
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
  for (let version = 1; version < currentVersion; version++) {
    const isVersionBad = checkVersion(version);

    if (isVersionBad) {
      return version;
    }
  }

  // we definitely know that some version is bad so we will never get this line
  // because the loop will return some version
}
