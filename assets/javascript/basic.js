/*
    Main Javascript page, the first function() is shorthand(in jquery) for document on ready.
    This means everything inside won't fire until the page is loaded(which is important since you can't manipulate elements if they aren't loaded yet!).
*/

$(function(){
    $('#navbar_placeholder').load("/assets/html/navbar.php");
    setTimeout(function(){
    	var email = document.getElementById("primary_email_addr");
    	email.href = "mailto:cse_ambassadors@unl.edu";
    	email.innerHTML = "cse_ambassadors@unl.edu";
    },100);
});
