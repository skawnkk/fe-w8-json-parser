import tokenizer from "./tokenizer.js";
import lexer from "./lexer";
import parser from "./parser";

export default function jsonParser(str): object[] {
  return parser(lexer(tokenizer(str)));
}
