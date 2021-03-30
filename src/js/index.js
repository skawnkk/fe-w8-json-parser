import "../style/style.scss";
import DataType from './dataType.js';
import jsonObject from './json.json';
import {
   _
} from './util.js';
import {
   tokenizer
} from './tokenizer.js';
import {
   lexer
} from './lexer.js';

const init = () => {
   _.$('.parse-btn').addEventListener('click', () => parse());
   const textarea = _.$('.json-area');
   const jsonParseResult = _.$('.json-parse');
   const parse = () => {
      const result = jsonParser(textarea.value);
      jsonParseResult.textContent = result.reduce((acc, cur) => acc += cur + '\n', '');
   }

   const jsonParser = str => {
      console.log(tokenizer);
      console.log(str, tokenizer(str));
      return lexer(tokenizer(str));
   }
};

init();