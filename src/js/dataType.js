<<<<<<< HEAD
export default class DataType {
=======
export default class DataType{
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
   constructor(type, value= ''){
      this.type = type;
      this.value =value;
      this.init()
    }
    init(){
<<<<<<< HEAD
      if(this.type === 'array') {
=======
      if(type === 'array') {
>>>>>>> b6b31833ca047cdaa3d919679686ff982b94236f
         this.child = [];
       } 
    }
}