const list = [1, 2, [3, [4, [5]]], 6];
const newList = [];

function flat(list) {
   debugger;
   list.forEach(el => {
      console.log(Array.isArray(el), el)
      if (!Array.isArray(el)) newList.push(el)
      else flat(el)
   })
   return newList;
}

//console.log(flat(list))



const stringList = [
   "myfile.txt", "dirstart", "오늘숙제.doc", "dirstart", "책리스트.txt", "dirend", "요리법.hwp", "dirend", "fe멤버들.md"
]

function parse(list, i = 0, parentNode = {
   type: 'Directory',
   child: []
}) {
   for (; i < list.length; i++) {

      if (list[i] === "dirstart") {
         const result = parse(list, ++i);
         parentNode.child.push(result[1]);
         i = result[0];
      } else if (list[i] === "dirend") {
         break;
      } else {
         const childData = {
            type: "file",
            value: list[i]
         }
         parentNode.child.push(childData)
      }
   }
   return [i, parentNode];
}
console.dir(parse(stringList)[1], {
   depth: null
})