import tokenizer from "./tokenizer";
import lexer from "./lexer";
import parser from "./parser";

export default function jsonParser(str: string): object[] {
  return parser(lexer(tokenizer(str)));
}
