let obj1 = { name:"박문수", age:29 };
let obj2 = obj1;        //shallow copy! obj1, obj2는 동일한 객체를 참조
let obj3 = { ...obj1 };    //객체 내부의 값은 복사하지만 obj3, obj1은 다른 객체
let obj4 = { ...obj1, email:"mspark@gmail.com" };  //새로운 속성 추가

obj2.age = 19;
console.log(obj1);  //{ name:"박문수", age:19 }
console.log(obj2);  //{ name:"박문수", age:19 }   obj1과 동일!!
console.log(obj3);  //{ name:"박문수", age:29 }   age가 바뀌지 않음
console.log(obj1 == obj2); //true
console.log(obj1 == obj3); //false


let arr1 = [ 100, 200, 300 ];
let arr2 = [ "hello", ...arr1, "world"];
console.log(arr1);      // [ 100, 200, 300 ]
console.log(arr2);      // [ "hello", 100, 200, 300, "world" ]