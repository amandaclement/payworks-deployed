/** 
 * This file contains general helper functions.
 */

// Extract values from array that correspond to particular key
function getValues(arr, key) {
    return arr.map(item => item[key]);
}

// Extract values from array based on key, filtering out duplicates
function extractUniqueValues(arr, key) {
    let values = getValues(arr, key);
    values = values.filter((value, index, self) => self.indexOf(value) === index);
    return values;;
}

// Extract values from array based on key, filtering out duplicates, and returning as an array of 2D arrays
function initializeOptions(arr, key) {
    let uniqueOptions = extractUniqueValues(arr, key);
    return uniqueOptions.map(option => [option, false]);
}

// Extract values from array based on key, returning as an array of 2D arrays each representing an option and its bool status
function getOptions(arr, optionKey, includeKey) {
    return arr.map(item => [item[optionKey], item[includeKey]]);
}

// Retrieve column of data
function getColumnData(item, column) {
    return column.data.map(({ key, className }) => [item[key], className]);
  }
  
// Retrieve all data columns
function getColumns(arr, columns) {
    return arr.map(item => {
        return columns.map(column => getColumnData(item, column));
    });
}

export { getValues, initializeOptions, getOptions, getColumns };



