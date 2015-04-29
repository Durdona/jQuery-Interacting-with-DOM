//TEST if jQuery is loaded 
/*
var checkJQ = setInterval(function() {
    if(jQuery) {
        console.log('jQuery loaded');
        clearInterval(checkJQ);
    }
}, 300);
*/

/**************** ITERATING THROUGH NODES *************/
// .each(function(index, Element))is used to iterate through jQuery objects: 
/* 
	$('div').each(function(index){
		alert(index +'='+ $(this).text()); // 'this' represents the raw DOM object that I'm looping through. If we use just (this).text() we wouldn't get access to methods such as 'text' here that's why we wrapped it in a jQuery wrapper. 
	});
	iterates through each div element and returns its index number and text. Preferable way by using 'this'

	// the same function above can be written as below

	$('div').each(function(index, elem){
		alert(index + '=' + $(elem).text()); // 'elem' equals 'this'
	});

*/

$(document).ready(function(){
	var output = $('#OutputDiv'); //we were updating HTML of that particular object, means it has to touch the DOM every time it loops through. 
	$('#DataTable th').each(function(index){
		output.html(output.html() + "<br />" + index + " " + $(this).text());
	});
});

// instead of a way above use the method below 
$(document).ready(function(){
	var html = ''; // set it an empty string in order not to get 'undefined'
	$('#DataTable th').each(function(index){
        html += "<br />"+index+" "+ $(this).text(); //that's why we built up obbur string first as we loop through grab text & index 
	});
	var output = $('#OutputDiv');
	output.html(html); //and once our string is built up we assign that to the HTML property.  
});


/**************** MODIFYING DOM OBJECT PROPERTIES *************/
// Modifying Object Properties 
// The this.propertyName  statement can be used to modify an object's properties directly: 
/* 
	$('div').each(function(index){
		this.title = "My Index = " + index; 
	});
Iterates through each div and modifies the title. If the property does not exist, it will be added. If this. is wrapped with the dollar parentheses like $(this). it is jQuery object and you can use jQuery API functions after dot. If you see this.title it is a raw DOM object with its 'title' property. 
*/
$('#DataTable th').each(function(index){
	// raw DOM object we can directly go to that property
	this.title = "Changed title"; //updated its title mouse over to see it 
	// alert(this.title);
	//but with jQuery object we have to go and get into API to do it.
	$(this).attr('title', 'Some title 2'); // will override raw DOM object. Mouse over them to see it
});


/**************** MODIFYING ATTRIBUTES *************/
// Accessing Attributes 
// Object attributes can be accessed using attr();
//	var val = $('#CustomerDiv').attr('title');  //#CustomerDiv is jQuery Object since it is wrapped with the dollar and parenthesis  -> Retrieves the value of the title attribute  

// Modifying Attributes
// .attr(attributeName, value) is the method used to access an object's attributes and modify the value: 
	
//	$('img').attr('title', 'My Image Title'); -> changes the title attribute to a value of 'My Image Title'


// Modifying Multiple Attributes 
// To modify multiple attributes, pass a JSON object containing name/value pairs: Demonstration that we can assign multiple attributes in one shot without iterating through all of the images: 
/*	
	$('img').attr({
		title: 'My Image Title',
		style: 'border: 2px solid black;'
	}); 

*/ // JSON object passed and used to change title and border


//JSON delimits objects using {and}
//The : character separates properties and values
/* { // parent object
	FirstName: 'Joe',
	LastName: 'Doe',
	Address: { //nested object
		Street: '1234 Anywhere St.',
		City: 'Phoenix',
		State: 'CA',
		ZipCode: 28192
	}
} */

$(document).ready(function(){
	$('#formBox').attr(
		{
			title: 'Some title 3', //added new attribute 
			style: 'font-size: 14pt; background-color: blue; '// can't put css:  it is a jQuery function that's why using style: 
		}
	);
});

// Using OBJECT CHAINING 
$(document).ready(function(){  // jQuery allows to chain different functions together, instead of having to iterate through theses over and over we are doing it all in one shot.
	$('#formBox')
	.attr(
		{
		title: 'Some title 4'
		}
	)
	.css('background-color', 'yellow')
	.css('color', 'black')
	.css('font-size', '20pt');
});


/**************** ADDING AND REMOVING NODES *************/
// Four key methods handle inserting nodes into elements:
.append()
.appendTo()
.prepend()
.prependTo()

// Appending adds children at the end of the matching elements 
 
 $('<span>(office)</span>').appendTo('.officePhone');  //better than document.createElement 
 OR (Both has the same functionality)
 $('.officePhone').append('<span>(office)</span>'); // preferable way 
// Would result in (office) being added into each    .officePhone class element 
 

// Prepending adds children at the beginning of the matching element: 

  $('<span>Phone:</span>').prependTo('.phone');
//  OR (Both has the same functionality)
  $('.phone').prepend('<span>Phone:</span>');
// Would result in Phone: being added into each .phone class element 

// Modifying the DOM
// traditional JavaScript way 
  var child1 = document.createElement('div'); 
  child1.setAttribute("name", value); 
//  OR - I could do 
// document.getElementById('formBox').innerHTML = ... 
// Using jQuery will make things easier instead of two ways above 
$('#formBox').append('<span style="background-color: green">Appended Child 1 </span>');
$('#formBox').prepend('<span style="background-color: blue">Prepended Child 1 </span>');

// To keep our code a little more efficient I will cache target element 
var formDiv = $('#formBox'); //most efficient and preferable way 
formDiv.append('<span style="background-color: grey">Overrides Appended Child 1</span>');
formDiv.prepend('<span style="background-color: grey">Overrides Prepended Child 1</span>');
$('<div style="background-color: orange">Appended div Child 2 </div>').appendTo(formDiv); 


// Wrapping Elements - lets wrap set of objects or one object with a parent element
// The following HTML and .wrap() function
  <div class = "state">Arizona</div>
  $('.state').wrap('<div class="US_State"/>');
// Results in:  
	<div class="US_State">
		<div class="state">Arizona</div>
	</div> 

// Wrap method
// .wrap each <span> has its own <div> wrapper 
$(document).ready(function(){  
	$('span.wrap').wrap('<div id="parentWrapper">');
	$('div#parentWrapper').each(function(){ // to check their HTML context 
		alert($(this).html());
	});
});

// .wrapAll  will wrap all spans in one <div> 
$(document).ready(function(){  // each <span> has its own <div> wrapper 
	$('span.wrap').wrapAll('<div id="parentWrapper">');
	$('div#parentWrapper').each(function(){ // to check their HTML context 
		alert($(this).html());
	});
});


// Removing Nodes 
// To remove nodes from an element use .remove() function
// .remove() will remove matched elements from the DOM:
 	$('.phone, .location').remove();
// Will result in objects with  .phone or .location classes being removed from the DOM

// Example: 
$(document).ready(function(){  
	$('span.wrap').wrap('<div id="parentWrapper">');
	$('div#parentWrapper').each(function(){ // to check their HTML context 
		alert($(this).html());
	});
	$('div#parentWrapper').remove();// removes all including children 
});


$(document).ready(function(){  
	$('span.wrap').wrap('<div id="parentWrapper">');
	$('div#parentWrapper').each(function(){ // to check their HTML context 
		alert($(this).html());
	});
	$('div#parentWrapper').remove(":contains('2')" ); // removes only one which contains '2' in it
});


/****************************** MODIFYING STYLES OF ELEMENTS IN THE DOM ***********************************/
// .css() function can be used to modify an object's style: 
	$("div").css("color", "red");

// Multiple styles can be modified by passing JSON object:
	$("div").css({
		'color': '#ccc',
		'font-weight': 'bold'
	});


// Different ways of Styling 
// 1. 
$(document).ready(function(){
	$('#formBox').attr(
		{
			title: 'Some title 3', //added new attribute 
			style: 'font-size: 14pt; background-color: blue; '// can't put css:  it is a jQuery function that's why using style: 
		}
	);
});

// 2. jQuery allows to chain different functions together, instead of having to iterate through theses over and over we are doing it all in one shot.
$(document).ready(function(){  
	$('#formBox')
	.attr(
		{
			title: 'Some title 4'
		}
	)
	.css('background-color', 'yellow')
	.css('color', 'black')
	.css('font-size', '20pt');
});

// 3. using JSON object chaining .css({...}) It is easier to maintain and really nice to work with. My choice :) 
$(document).ready(function(){ 
	$('#formBox')
	.attr(
		{
			title: 'Some title 4'
		}
	)
	.css({
	'background-color': 'yellow',
	'color': 'black',
	'font-size': '20pt'
	}).text("changed content"); // if I don't add .text('changed content') I will see actual table content instead 
});


/*************************** MODIFYING CLASSES ********************/
// The four methods for working with CSS Class attributes make super easy to change the DOM 
// 1. 
	.addClass()  // adds one or more class names to the class attribute of each matched element: 
		$('p').addClass('classOne');
	// More than one class:
		$('p').addClass('classOne classTwo');
	// Example: 
	$(document).ready(function(){
		$('input[type="text"]').addClass('Highlight');
	});

// 2.
	.hasClass()  // will return 'true or 'false'. 'true' if the selected element has a matching class that is specified: 
	if($('p').hasClass('styleSpecific')){
		// perform work 
	}

// 3.
	.removeClass()  // can either remove all classes off of the node or it can remove a single class 
	$('p').removeClass('classOne classTwo'); // will remove given 2 classes from paragraph. Old way is document.getElementByTagName not preferable 

	// Remove all class attributes from matching selectors:
	$('p').removeClass();
	//Example: 
	$(document).ready(function(){
		$('input[type="text"]').addClass('Highlight');
		$('#LastNameTextBox').removeClass('Highlight');
	});

// 4.
	.toggleClass(); // turns a class 'on' and 'off' based on is it there or not. Alternates adding or removing a class based on the current presence or absence of the class: Extremely useful with things like hovering over items tip: use it with 'if' statement 
	$('#PhoneDetails').toggleClass('highlight');
	<style type="text/css">
		.highlight{background: yellow;}
	</style> 
	// Example:
	function Focus(textbox){
	$(textbox).toggleClass('Highlight');
	}
	function Blur(textbox){
		$(textbox).toggleClass('Highlight');
	}

	// OR - you could set FocusBlur on the raw HTML and use single function instead . Change Focus & Blur to FocusBlur to use this function
	function FocusBlur (textbox){
		$(textbox).toggleClass('Highlight');
	}






