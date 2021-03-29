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
