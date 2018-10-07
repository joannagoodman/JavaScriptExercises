//JS Tips

[10] === 10    // is false
[10]  == 10    // is true
'10' == 10     // is true
'10' === 10    // is false
 []   == 0     // is true
 [] ===  0     // is false
 '' == false   // is true but true == "a" is false
 '' ===   false // is false

//IFFE
(function(){
    // private code executed automatically
})();  

//Calling in arguement position
(function(a,b){
    var result = a+b;
    return result;
})(10,20)

//Defining in outside scope
var a = 10;
var b = 20; 

(function(a,b){
    var result = a+b;
    return result;
})(a,b)