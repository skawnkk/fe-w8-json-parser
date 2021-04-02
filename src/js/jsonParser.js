import tokenizer from './tokenizer.js';
import lexer from './lexer.js';
import parser from './parser.js';

export default function jsonParser(str) {
   console.log("lexer:", lexer(tokenizer(str)))
   return parser(lexer(tokenizer(str)))
}

