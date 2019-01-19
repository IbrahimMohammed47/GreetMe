

 
//initializing GreetMe object with firstname,lastname and language
var g = G$('ibrahim', 'Mohammed','en');

//logging informal greeting in the console
g.greet(false);

//logging formal greeting in the console
g.greet(true);

//returning greetings
console.log(g.greetings());

//returning formal greetings
console.log(g.formalGreetings());

//returning good morning
console.log(g.morning());

//returning good afternoon
console.log(g.afternoon());

//returning goodnight
console.log(g.night());

//returning goodbye
console.log(g.farewell());

//returning 'how are you?' random questions
console.log(g.randomHowGreet());

//changing object language
g.setLang('de');
console.log(g.lang);

//returning full name
console.log(g.fullName());

//shows log message in the console
g.log();

//HTMLGreeting
$("#login").click(function () {
    $("#logindiv").hide();
    g.setLang($("#lang").val()).HTMLGreeting('#greeting').log();
});

//Method chaining support
var byeMsg = g.greet().setLang('ar').log().farewell();
console.log(byeMsg);