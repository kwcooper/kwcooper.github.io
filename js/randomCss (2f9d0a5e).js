var myQuotes = new Array();
    myQuotes[0] = "Nice to see you";
    myQuotes[1] = "Welcome";
    myQuotes[2] = "How do you do";
    myQuotes[3] = "Hi there";

    var myRandom = Math.floor(Math.random()*myQuotes.length);
    var intro = "Well, you managed to stumble on my corner of the internet, so I might as well introduce mys "
    //alert(myQuotes[myRandom]);
    document.getElementById('myQuote').innerHTML= myQuotes[myRandom] + intro;
