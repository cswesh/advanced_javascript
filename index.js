function showData(obj){
    document.querySelector('.output').innerHTML += JSON.stringify(obj)+ "<br><br>" ;
}

//! 1. Removing Duplicate item
const array = [1,2,2,3,3,3,3,4,5];
// showData(array)
//! now its time to remove the duplicate item in the set
const unique = [... new Set(array)]
// showData(unique); //working

//! 2. '||' vs '??'
// var temp = 25;
// var temp = null;
var temp = 0;
//! to avoid false values can use || operator
// showData(temp || "Not present") ;// working
//! but above will work for 0 also, it shouldn't 
// showData(temp ?? "Not present");// working
//! single operator
const obj = {
    func1: ()=>{
        console.log('OK')
    },
    func2: ()=>{
        console.log('OK2')
    }
}

obj.func1();
obj.func2();
obj.func3?.();

//! 3. Execute string as Script
// var a = window.prompt('Input value')
// console.log(a);
// showData(eval(a))

//! 4. String Template
var t1 = "hey";
var t2 = "Swesh";
// showData(t1 + "Mr. " + t2 + " How are you?");
 showData(`${t1} Mr. ${t2}  How are you?`); //working

//! 5. Type Conversions
var yes = {
    obj1 : "something is there"
} //! should return true
var no = null;
showData(yes);
showData(no);
//! to convert the result as Boolean
showData(!!yes);
showData(!!no);

var str = '25';
var str2 = '26';
showData(str + str2); // "2526"
//! Convert to integer
showData(typeof str); //string
showData(typeof +str); //number
showData(+str + +str2); // 25+26 = 51
