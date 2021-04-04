import { DEFINEKEYWORD } from "./variables";

export let stringTypeCounter: number = 0;
export let numberTypeCounter: number = 0;
export let parserDepth: number[] = [];

export default function lexer(arr: string[]): object[] {
  stringTypeCounter = 0;
  numberTypeCounter = 0;
  const arrayStack: number[] = [];
  const objectStack: number[] = [];
  parserDepth = [];

  const result = arr.reduce((acc, cur: string): object[] => {
    const type: string =
      cur === null
        ? "null_object"
        : DEFINEKEYWORD[cur.toString()[0]] || "number";

    interface obj {
      type: string;
      depth: number;
      value?: string;
      child?: object[];
    }

    const object: obj = {
      type,
      depth: arrayStack.length,
      value: null,
      child: null,
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
        object.value = cur;
        break;
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
