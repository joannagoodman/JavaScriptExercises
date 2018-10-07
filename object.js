//object.create
var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}
};

var john = object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = object.create(personProto, 
{
	name : { value: 'Jane'},
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});

// object.create builds object inherits directly from 1st passed into arg
// function contructor inherits from the constructors prototype propery
// object.create allows us to directly specify what object should be a prototype

// function constructor is the more popular one of the 2 :)

// Primatives vs object

// Primatives- numbers, strings, boolean, null, undefined
// objects- everything else, arrays, functions, objects, ect

// A big difference the two, the object contains a reference in memory to the place in which it is stored, it just points to the object
// A primative will directly store the data

// FUNCTIONS- are also objects
// an instance of the object type
// behaves like any other object
// can store functions in a variable
// can return a function from a function
// can pass a function as an argument

// WE say that these are First-Class Functions

function maxHeartRate(el){
	if (el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}


//callback functions

//modular and more readable code

//FUNCTIONS RETURNING FUNCTIONS

function interviewQuestion(job){
	if (job === 'designer'){
		return function(name){
			console.log(name + ', can you please explain what UX Design is?');
		}
	} else if (job === 'teacher'){
		return function(name){
			console.log('What subject do you teach, ' + name + '?');
		}
	} else { 
		return function(name){
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

//exact same as storing a variable in a function

teacherQuestion('John'); //this is a function and accepts a name in the function
designerQuestion('John');

interviewQuestion('teacher')('Mark'); //calling interveiw question function

//IMMEDIATELY INVOKED FUNCTIONS
//normal
function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();
//IIFE
(function (){
		var score = Math.random() * 10;
	console.log(score >= 5);
}) ();

// anonymouse function, wrap full thing in parethesis, treated as an expression
// invoke the function
// new scope, no interferance with other variables, data privacy

(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5);
}) (5);

// CLOSURES

//write a small function, that returns a function

function retirement(retirementAge){
	var a = ' years left until retirement.';

	return function(yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(66)(1990);

// scope chain always stays intact
// A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. 
//The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets)
//it has access to the outer function's variables
//and it has access to the global variables.
/***
object orientatated programming
we want to repeat everything - so we write it in functions and call them
we call the functions - by using the function name and passing arguements to get what we want
each time we call the function - we need to parameters in the function if we want to get two pieces of info when we call the function- person
function parameters - arguements, name, favColour- when we call the function we can pass in the name and the fav colour of the person
this makes it less repeatative- we may in the future want to access these pieces of info
we should store them as variables - var johnName = "John Doe"; so we can pass in the variable names as arguements
Our code is storing data within the variables and accessing the data later on

How do we add structure to our data- an object!
we should create an object for john var john{ // everything to do with john }
name: " john doe", - property, name - value string john doe
access the property person (john.name, john.favColour);

Functions can be stored within an object
in the john object, greet: function (){ console.log("HELLO");}
we need to call the function - john.greet();
1 variable or object can contain all the data that it needs to operate
begin thinking in terms of objects, data and behaviour, all interacting in the programming
we use the function to make something happen
when we have the function operating within an object, it is called a METHOD
A method is a function operating within an object- or the two operating together
stop thinking in terms of lose individial functions and start thinking about objects
john is the object, greet is a behaviour with a function, name is a noun, piece of data
we can add as many different methods as we want to this object, run, jump ect
console.log("Hello, my name is " + john.name + " my favourite colour is " + favColour);

create an object- multiple objects that are very similar to another,
class!!!- in JS we can create a reusable blueprint by using a constructor function
a constructor function function Person () this.greet = function() console.log("Hello");{ }
var john = new Person();
john.greet();
var jane = new Person();
jane.greet();
this keyword - refers to object being created
in function Person(){} we can add more properties to our blueprint
this.name = fullName;
this.favouriteColour = favColour; 
we can add parameters to the person function for full name, colour- fullName, colour
and when calling var john = new Person("John Doe", "blue");

This is OBJECT orientatated! :D

**/

/****
Learn List:
arrow functions
***/

.form-sso-wrapper .generalbox p{ login.less line 175 }

// Add in the bootstrap file - to nebula less/bootstrap/progress-bars.less
//Progress bars
.progress .bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #337ab7;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    transition: width .6s ease;
    text-align: right;
    box-shadow: inset 0 -1px 3px 0 rgba(0,0,0,.5);
}