const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

const findMin = (...args) => Math.min(...args);

findMin(2, 4, 6, 8, 41);
findMin(15125, -5235);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

doubleAndReturnArgs([1, 2, 3], 4, 4);
doubleAndReturnArgs([2], 10, 4);

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  // OPTION 1
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  // OPTION 1
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // ({ [key]: undefined, ...obj } = obj);
  // return obj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
