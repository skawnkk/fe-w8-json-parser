export default class DataType {
   constructor(type, value= ''){
      this.type = type;
      this.value =value;
      this.init()
    }
    init(){
      if(this.type === 'array') {
         this.child = [];
       } 
    }
}