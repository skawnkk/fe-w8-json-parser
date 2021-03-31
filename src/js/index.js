import "../style/style.scss";
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

      jsonParseResult.innerText = result.reduce((acc, cur) => {
         acc += cur + '\n';
         return acc;
      }, '');
      // jsonParseResult.textContent = result.reduce((acc, cur) => acc += cur + '\n', '');
   }

   const jsonParser = str => {
      const step2 = tokenizer(str)
      console.log("lexer:", lexer(step2))
      return lexer(tokenizer(str));
   }
};

init();