
// PUT QUOTES IN HERE 
var rand_quotes = [
    {
    author: 'MUHAMMAD ALI',
    quote: 'I AM THE GREATEST, I SAID THAT EVEN BEFORE I KNEW I WAS' 
  },
    {
    author: 'MUHATMA GANDHI',
    quote: 'BE THE CHANGE THAT YOU WISH TO SEE IN THE WORLD' 
  },  
    {
    author: 'STEPHEN HAWKING',
    quote: 'WHILE THERE IS LIFE, THERE IS HOPE' 
  },  
    {
    author: 'EASTER HICKS',
    quote: 'WHAT YOU FOCUS ON GROWS' 
  },  
    {
    author: 'JOHN LENNON',
    quote: 'THERE ARE NO PROBLEMS ONLY SOLUTIONS' 
  },  
    {
    author: 'CASEY NEISTAT',
    quote: 'DO WHAT YOU CANT' 
  },  
    {
    author: 'FRANK OCEAN',
    quote: 'WORK HARD IN SILENCE, LET YOUR SUCCESS BE YOUR NOISE' 
  },  
    {
    author: 'BUDDHA',
    quote: 'THE TROUBLE IS YOU THINK YOU HAVE TIME' 
  },  
    {
    author: 'PABLO PICASSO',
    quote: 'ACTION IS THE FOUNDATIONAL KEY TO ALL SUCCESS' 
  },  
    
    
    
    
]


//QUOTE1
var author = document.getElementById('Hauthor');
var quote = document.getElementById('Hquote');


function random_quote() {
    var rand_num = Math.floor(Math.random() * rand_quotes.length);
    
    var rand_auth = rand_quotes[rand_num].author;
    var rand_comment = rand_quotes[rand_num].quote;
    
    //puts quote into html
    Hauthor.innerHTML = rand_auth;
    Hquote.innerHTML =rand_comment;

}

//QUOTE1
var author = document.getElementById('Hauthor2');
var quote = document.getElementById('Hquote2');


function random_quote2() {
    var rand_num2 = Math.floor(Math.random() * rand_quotes.length);
    
    var rand_auth2 = rand_quotes[rand_num2].author;
    var rand_comment2 = rand_quotes[rand_num2].quote;
    
    //puts quote into html
    Hauthor2.innerHTML = rand_auth2;
    Hquote2.innerHTML = rand_comment2;

}



// GENERATE QUOTES IN HTML
random_quote();
random_quote2();




//EXPAND BOX 1
var button = document.getElementById("show-more");
var content = document.getElementById("quotebox");

button.onclick = function(){
    
    if(content.className == "open"){
        //shrink box
        content.className = "";
        button.className = "";
       
    } else {
        //expand the box
        content.className = "open";
        button.className = "open";
      
    }
};

//EXPAND BOX 2
var button2 = document.getElementById("show-more2");
var content2 = document.getElementById("quotebox2");


button2.onclick = function(){
    
    if(content2.className == "open"){
        //shrink box
        content2.className = "";
        button2.className = "";
       
    } else {
        //expand the box
        content2.className = "open";
        button2.className = "open";
      
    }
};



















