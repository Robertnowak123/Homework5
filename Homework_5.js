
// Javascript Cheat Sheet

// 1. Example of variables (please remove the comment to test the js)

// var x=10
// var y=12

// function Test(){
// 	(x+y);
// }


// 2. Example of debugging using alert & comment (see 1 for an alert)

// var x=10
// var y=20

// function Test(){
// 	alert(x*y)
// }


// 3. Example of debugging by printing code to the console.
// the below command prints x to the console (can be accessed
// in a browser like google chrome) and it will return 5 as a value. Good way of checking if js works

// var x=5
// var y=5

// console.log(x)

// 4. Examples of different data types are a) numbers, b) string or c) borrean outputs

// a) numbers

// var x=5
// var y=5

// console.log(x)


// Result: this will return "5" in the console

// b) string (text)

// var x= "Rob"
// var y= "Nowak"

// console.log(x + " " + y)


// Result: this will return my name "Rob Nowak" in the console

// c) borrean outputs

// var IsitOctober= true

// console.log(IsitOctober)

// Note: only makes sense if it actually is October

// 4. Examples of Arrays with a) numbers & string, b) using objects (not an array per se)

// a)
// var x= ["October", "November", "December"];
// var y= [2013, 2014, 2015];
// var z= [x, y];

// console.log(x[0], y[2]);

// This example returns "October 2015" to the console

// b) creating an Object with strings and then pulling out some data from it.

// var fruit = {apple: 'green', mango: 'yellow'}
// console.log(fruit['apple']);

// 5. Examples of different ways to test your code: a) in html using the <string></string> tags (not recommended), b) using the console.log function,
// c) using an alert() function or d) simply opening a web browser (e.g. google chrome), right-clicking on the page, clicking on inspect element and then on console

// the codes for b) and c) are already used and mentioned above, but the code for a) is

// <!DOCTYPE html>
// <html>
// 	<head>
// 	</head>
// 	<body>
// 		<script>
// 			var x=100;
// 			console.log(x);
// 		</script>
// 	</body>
// </html>

// 6. Examples of Logic, where you use if-statements:


// var x=100
// var y=100

// function Test(){
// 	if(x===y){
// 		alert("true")
// 	} else {
// 		alert("false")
// 	}
// }

// To test this, please also "activate" the HTML Code on top

// 7. Examples of Functions:

// function Test(x, y){
// 	// return the product of those numbers + 1
// 	return x * y + 1;
// }
// 	console.log(Test(5,5));


// the result here should be 5*5+1=26


// Exercise 2: Write 3 different functions that take input and return something via the console or an alert
// Upload your work to GitHub and submit it here.

// function 1:

// var x = 5
// var y = 7
// var z = 2

// function Test(){
// 	return x + y + z + 100;
// }
// console.log(Test());

// This function should yield 114

// function 2:

// var x = 10
// var y = 10
// var z = 5

// function Test(){
// 	return x + y + " " + "Test";
// }
// alert(Test());

// This function should yield 20 Test

// function 3:


// function Test(Fruit){
// 	return alert(Fruit);
// }

// Test("Apple");

// // This function should yield "Apple"






