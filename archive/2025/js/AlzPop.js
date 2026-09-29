/*
* World AD Counter
* Keiland Cooper
*/
function maind(){
	startdate = new Date()
	now(startdate.getYear(),startdate.getMonth(),startdate.getDate(),startdate.getHours(),startdate.getMinutes(),startdate.getSeconds())
}
function ChangeValue(number,pv){
	numberstring =""
	while (number > 1)
	 { 
	    numberstring = (Math.round(number-0.5) % 10) + numberstring
	    number= number / 10

	 }
	 numberstring=numberstring
    
//    This is a linear estimate based on 
//    non-linear modeling up to 2050
//    for more information, please see:
//    http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.176.168&rep=rep1&type=pdf
    pop = Math.round(number * 1E10)
    pct = (1.5E-12 * pop)-0.0048
    pait = pop * pct
  
    numberstring =""
	var j=0 
	var i=0
	while (pait > 1)
	 { 
	    numberstring = (Math.round(pait-0.5) % 10) + numberstring
	    pait= pait / 10
	    j++
	    if (pait > 1 && j==3) { 
			numberstring = "," + numberstring 
			j=0}
	    i++
	 }
	 numberstring=numberstring
  
  
if (pv==1) {document.getElementById("alzpop").innerHTML=numberstring }
}

function now(year,month,date,hours,minutes,seconds){       
startdatum = new Date(year,month,date,hours,minutes,seconds)
var now = 5600000000.0
var now2 = 5690000000.0
var groeipercentage = (now2 - now) / now *100
var groeiperseconde = (now * (groeipercentage/100))/365.0/24.0/60.0/60.0 
nu = new Date ()                
schuldstartdatum = new Date (96,1,1)                            
secondenoppagina = (nu.getTime() - startdatum.getTime())/1000
totaleschuld= (nu.getTime() - schuldstartdatum.getTime())/1000*groeiperseconde + now
ChangeValue(totaleschuld,1);
timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",200)
}
window.onload=maind