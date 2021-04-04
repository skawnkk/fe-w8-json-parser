export default function parser(arr): object[] {
  const stack: object[][] = [];
  let prev: object = null;
  let prop: any = null;
  for (const item of arr) {
    switch (item.type) {
      case "array":
      case "object":
        pushItem(item);
        stack.push(item.child);
        break;
      case "colon":
        prop = {
          value: {
            propKey: prev,
          },
        };
        stack[stack.length - 1].pop();
        break;
      case "null_object":
        item.type = "object";
        pushItem(item);
        break;
      case "string":
      case "boolean":
      case "number":
        pushItem(item);
        break;
      case "close_array":
      case "close_object":
        stack.pop();
        break;
    }
    prev = item;
  }

  function pushItem(item: object[]): void {
    if (prop) {
      prop.value.propValue = item;
      prop.type = "objectProperty";
      stack[stack.length - 1].push(prop);
      prop = null;
    } else
      stack.length === 0
        ? stack.push(item)
        : stack[stack.length - 1].push(item);
  }
  return stack.pop();
}
