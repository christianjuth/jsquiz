import { Problem } from './src/types'

const data: Problem[] = [
  {
    id: 'arrays-pop-01',
    code: `
      const arr = [1, 2, 3];
      const item = arr.pop();
    `,
    title: 'What is the value of item?',
    options: [
      '3',
      '2',
      '1'
    ],
    answer: '3',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop'
  },
  {
    id: 'arrays-shift-01',
    code: `
      const arr = [1, 2, 3];
      const item = arr.shift();
    `,
    title: 'What is the value of item?',
    options: [
      '3',
      '2',
      '1'
    ],
    answer: '1',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'
  },
  {
    id: 'array-deconstruct-01',
    code: `
      let arr = [1, 2, 3, 4];
      let [num, ...rest] = arr;
      console.log(rest);
    `,
    title: 'What gets logged to console?',
    options: [
      '[2, 3, 4]',
      '1',
      '[1, 2, 3, 4]'
    ],
    answer: '[2, 3, 4]',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
  },
  {
    id: 'nullish-coalescing-operator-01',
    code: `
      const bool = false ?? true;
    `,
    title: 'What is the value of bool?',
    options: [
      'true',
      'false'
    ],
    answer: 'false',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
  },
  {
    id: 'nullish-coalescing-operator-02',
    code: `
      const foo = undefined ?? false;
    `,
    title: 'What is the value of foo?',
    options: [
      'undefined',
      'false'
    ],
    answer: 'false',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
  },
  {
    id: 'nullish-coalescing-operator-03',
    code: `
      const foo = null ?? 0;
    `,
    title: 'What is the value of foo?',
    options: [
      'null',
      '0'
    ],
    answer: '0',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
  },
  {
    id: 'nullish-coalescing-operator-04',
    code: `
      const num = 0 ?? 42;
    `,
    title: 'What is the value of num?',
    options: [
      '0',
      '42'
    ],
    answer: '0',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
  }
];

export default data;