import tokenizer from "./tokenizer.js";
import lexer from "./lexer.js";
//*recursion
let i = 0;
export default function reparser(
  lexers,
  parentNode = {
    type: "array",
    child: [],
    value: null,
  }
) {
  let prop = null;
  while (lexers.length > 0) {
    const lexer = lexers.shift();
    const category = {
      type: lexer.type,
      value: lexer.value,
    };
    function addChildNode(category) {
      if (prop) {
        prop.value.propValue = category;
        parentNode.child.push(prop);
        prop = null;
      } else {
        parentNode.child.push(category);
      }
    }
    switch (lexer.type) {
      case "array":
        addChildNode(
          reparser(lexers, {
            type: "array",
            child: [],
            value: "arrayObject",
          })
        );
        break;
      case "object":
        addChildNode(
          reparser(lexers, {
            type: "object",
            child: [],
            value: null,
          })
        );
        break;
      case "close_array":
      case "close_object":
        return parentNode;
      case "colon":
        const prev = parentNode.child.pop();
        prop = {
          value: {
            propKey: prev,
          },
          type: "obejctProperty",
        };
        break;
      case "null_object":
        category.type = "object";
        addChildNode(category);
        break;
      case "string":
      case "boolean":
      case "number":
        addChildNode(category);
        break;
      default:
        break;
    }
  }
  return parentNode.child;
}
const str = `["1a3",[null,false,["11" ,[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]`;
console.dir(reparser(lexer(tokenizer(str))), {
  depth: null,
});
