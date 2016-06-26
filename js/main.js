/*This is a JS comment*/
//anything after two slashes is also a comment//

//beginning of page before loaded//
function askQuestions() {


	var firstName= prompt('What is your first name?');
	var lastName= prompt('What is your last name?');
	var fullName= firstName+ ' '+ lastName; 
	console.log(fullName);

	var age= prompt('How old are you?')
	age = parseInt(age); 
	if(age>=18) {
		console.log('User is +18');
	} else if(age>=13) {
		console.log('User is a teenager');
	} else {
		console.log('User is underage');
		}

	//if it's Seb Galperti who is logging in, his access is granted. if not, it's failed//
	if(firstName.toLowerCase()=="seb" && lastName.toLowerCase()=="galperti") {
		console.log ('Acces granted');
		alert('Access granted');
	} else {
		console.log ('Login failed')
		}

}

//when the page is loaded
$(function() {

	$('img').on('click', askQuestions);

	$('h1').on('click', askQuestions);

	//when use clicks on an h3
	$('h3').on('click', function() {

		//slidetoggle section after the clicked h3
		$(this).next().slideToggle(200); 


	}); 

}); 
