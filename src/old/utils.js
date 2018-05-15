console.log('utils.js is runnings');

const square = x => x * x;
// export const square = x => x * x;

const add = (a, b) => a + b;
// export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
// export default (a, b) => a - b;

export { square, add, subtract as default };