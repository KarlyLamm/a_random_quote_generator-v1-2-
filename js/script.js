/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes=[
  {
    'quote' :'"Talk is cheap. Show me the code."' ,
    'source':"Linus Torvalds",
    'citation':'goodreads',
    'year':2000
  },
  {
    'quote':"People don't care about what you say, they care about what you build",
    'source':"Mark Zuckerberg",
    'citation':"Wired News",
    'year':2014
  },
  {
    'quote':"Programs must be written for people to read, and only incidentally for machines to execute.",
    'source':"Harold Abelson",
    'citation':'goodreads',
    'year':1984
  },
  {
    'quote':"You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    'source':"John Romero",
    'citation':'Brainy Quote',
    'year':2009
  },
  {
    'quote':"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    'source':"Patrick McKenzie",
    'citation':"Twitter",
    'year':2016
  },

]
// Above is the array of quotes that will be randomly selected to show on the screen as well as source, cite, and year


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
let ranNumber=Math.floor(Math.random()*quotes.length);
// this equation allows the program to pick a random number between 0 and the amount of quotes in the above array
let randomQuote=quotes[ranNumber];
//this assigns the random number to an actual object in the array, so it will print the object instead of a number
return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
let shownQuote=getRandomQuote()
// this is a variable to use this function within the scope of this new function
let html='<p class="quotes">'+shownQuote.quote+'</p>'
html+='<p class="source">'+shownQuote.source


html+='<span class="citation">'+shownQuote.citation+'</span>'



html+='<span class="year">'+shownQuote.year+'</span>'

  
'</p>'

document.getElementById('quote-box').innerHTML = html;
// this assigns the html variable within this function to the HTML to be viewable on the application
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);