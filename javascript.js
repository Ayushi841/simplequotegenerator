var quotes=[
'Love for all,hatred for none',
'work smart',
'every moment is a fresh beginning',
'never regret anything that made u smile',
'aspire to inspire before we expire'
]
function newQuote() {
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}