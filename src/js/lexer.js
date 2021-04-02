import { DEFINEKEYWORD } from "./variables.js";

export let stringTypeCounter = 0;
export let numberTypeCounter = 0;
export const parserDepth = [];
export default function lexer(arr) {
  const arrayStack = [];
  const objectStack = [];

  const result = arr.reduce((acc, cur) => {
    const type =
      cur === null
        ? "null_object"
        : DEFINEKEYWORD[cur.toString()[0]] || "number";
    const object = {
      type,
      depth: arrayStack.length + objectStack.length,
    };

    switch (type) {
      case "array":
        object.child = [];
        if (arrayStack.length > 0) object.value = "arrayObject";
        arrayStack.push(1);
        break;
      case "object":
        object.child = [];
        objectStack.push(1);
        break;
      case "seperator":
      case "colon":
      case "string":
        object.value = cur;
        stringTypeCounter++;
        break;
      case "null_object":
      case "boolean":
        object.value = cur;
        break;
      case "number":
        object.value = cur;
        numberTypeCounter++;
        break;
      case "close_array":
        object.value = cur;
        arrayStack.pop();
        break;
      case "close_object":
        object.value = cur;
        objectStack.pop();
        break;
    }
    parserDepth.push(object.depth);

    return [...acc, object];
  }, []);
  return result;
}
