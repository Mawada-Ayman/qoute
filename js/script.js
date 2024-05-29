
var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”"
];

var usedQuotes = []

document.getElementById('qoutBtn').addEventListener('click' ,function(){
    
    if (usedQuotes.length === quotes.length) {
        usedQuotes = []
    }

    var randomIndex;
    for (var i = 0; i<quotes.length; i++){
        randomIndex = Math.floor(Math.random () * quotes.length);
        if ( !usedQuotes.includes(randomIndex) ){
            break;
        }
    }
    usedQuotes.push(randomIndex);
    document.getElementById("qouteDisplay").innerText = quotes[randomIndex]
} )