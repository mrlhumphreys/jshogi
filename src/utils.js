/**
 * Remove undefined and null from array.
 * @param {Object[]} array - The array.
 * @return {Object[]}
 */
export const compact = function(array) {
  return array.filter(function(e) {
    return typeof e !== 'undefined' && e !== null;
  });
};

/**
 * Is the object not undefined and not null 
 * @param {Object} e - The object.
 * @return {boolean}
 */
export const exists = function(e) {
  return typeof e !== 'undefined' && e !== null;
};
