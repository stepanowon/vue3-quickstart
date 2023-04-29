var obj = { result: 0 };
obj.add = function(x,y) {  
   this.result = x+y;
}
obj.add(3,4)
console.log(obj)        // { result: 7 }