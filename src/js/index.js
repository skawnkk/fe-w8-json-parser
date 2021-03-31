<<<<<<< HEAD
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
=======
const DataType = require('./dataType.js')
const jsonObject = require('./json.json');
const jsonString = JSON.stringify(jsonObject.TEST);

console.log(DataType);


//[1,2,3]
//tokenizer
//괄호구분
const Tokenizer =(str)=>{
   const seperator = [',','[','{','}',']'];
   const stack = [];
   const result = [];
   let target;
   let start, type;

   for (let i=0; i<str.length; i++){
      if(target) {
         if(type){
            if(seperator.includes(str[i])){
               target.child.push(new DataType(type, str.substring(start, i)));
               start = null;
               type = null;
               }
         }else{
            start=i;
            type = /\d/.test(str[i]) ? 'number' : 'string';
         }
      }else{
         switch(str[i]){
            case '[': target = new DataType('array') 
               break;
            case ']':
               break; 
            case '{':
               break;
            case '}':
               break; 
               }
      }  
   }
   return target;
}

console.log(Tokenizer(jsonString))
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
