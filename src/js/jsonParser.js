import tokenizer from "./tokenizer.js";
import lexer from "./lexer.js";
import parser from "./parser.js";

export default function jsonParser(str) {
   console.dir(parser(lexer(tokenizer(str))), {depth:null})
  //return parser(lexer(tokenizer(str)));
}

jsonParser('["json",["junami"]]')