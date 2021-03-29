export default class DataType{
   constructor(type, value= ''){
      this.type = type;
      this.value =value;
      this.init()
    }
    init(){
      if(type === 'array') {
         this.child = [];
       } 
    }
}