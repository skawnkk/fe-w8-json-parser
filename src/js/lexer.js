import {
  DEFINEKEYWORD
} from './variables.js'

export const lexer = arr => {
  const arrayStack = [];
  const objectStack = [];

  const result = arr.reduce((acc, cur) => {
    console.log(cur)
    const type = cur === null ? 'null_object' : DEFINEKEYWORD[cur.toString()[0]] || 'number';
    const object = {
      type
    }
    switch (type) {
      case 'array':
        object.child = [];
        if (arrayStack.length > 0) object.value = 'arrayObject';
        arrayStack.push(1)
        break;
      case 'object':
        object.child = [];
        objectStack.push(1)
        break;
      case 'seperator':
      case 'colon':
      case 'string':
      case 'null_object':
      case 'boolean':
      case 'number':
        object.value = cur;
        break;
      case 'close_array':
        object.value = cur;
        arrayStack.pop();
        break;
      case 'close_object':
        object.value = cur;
        objectStack.pop();
        break;
    }
    return [...acc, object];
  }, []);
  return result;
}