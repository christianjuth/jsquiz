import { Problem } from './src/types'

const data: Problem[] = [
  {
    id: 'arrays-pop-01',
    code: `
      let arr = [1, 2, 3];
      let item = arr.pop();
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
      let arr = [1, 2, 3];
      let item = arr.shift();
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
      let bool = false ?? true;
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
      let foo = undefined ?? false;
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
      let foo = null ?? 0;
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
      let num = 0 ?? 42;
    `,
    title: 'What is the value of num?',
    options: [
      '0',
      '42'
    ],
    answer: '0',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator'
  },
  {
    id: 'object-reference-01',
    code: `
      let obj1 = { a: 1 };
      let obj2 = obj1;
      obj2.a = 2;
      console.log(obj1.a);
    `,
    title: 'What gets logged to console?',
    options: [
      '1',
      '2'
    ],
    answer: '2',
    helpLink: 'https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600'
  },
  {
    id: 'object-deconstruct-01',
    code: `
      let obj = { a: 1 };
      let { a } = obj;
      console.log(a);
    `,
    title: 'What gets logged to console?',
    options: [
      '1',
      'undefined',
      'null'
    ],
    answer: '1',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
  },
  {
    id: 'object-undefined-key-01',
    code: `
      let obj = {};
      console.log(obj.a);
    `,
    title: 'What gets logged to console?',
    options: [
      'null',
      'undefined'
    ],
    answer: 'undefined'
  },
  {
    id: 'object-spread-01',
    code: `
      let obj = { a: 1, b: 2 };
      let { a, ...rest } = obj;
      console.log(rest);
    `,
    title: 'What gets logged to console?',
    options: [
      '{b: 2}',
      '{a: 1, b: 2}'
    ],
    answer: '{b: 2}',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
  },
  {
    id: 'ternary-operator-01',
    code: `
      let num = true ? 1 : 0;
    `,
    title: 'What is the value of num?',
    options: [
      '1',
      '0'
    ],
    answer: '1',
    helpLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'
  },
];

export default data;