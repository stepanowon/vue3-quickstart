var obj = { result:0 };
obj.add = function(x,y) {
  const inner = () => {
     this.result = x+y;
  }
  inner()
}
obj.add(3,4)

console.log(obj)        // { result: 7 }