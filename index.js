const prijsfris = 1.99		  //met const en = sla je data op in het element voor = en tussen var
const prijsbier = 2.49	      //voor later gebruik. Je kan de element gebruiken door de naam van 
const prijswijn = 2.99		  //het element in te typen zonder const maar je kan de data in
const prijssnack = 0.15		  //het element niet veranderen
var totaalfris = 0            //met var sla je data op in het element voor = en tussen var 
var totaalbier = 0			  //voor later gebruik. Je kan de element gebruiken door de naam van 
var totaalwijn = 0			  //het element in te typen zonder var en je kan de data in
var totaalsnack = 0			  //het element veranderen door de naam van het element in te typen,
							  //daarna = intypen, en daarna de code waarmee je de orginele code mee wil veranderen.
var bon=""					  //met "" maak je zinnen in javascript
var rekening=""

function drankje(){ /*Met function voer je de codes uit die tussen de accolades staat 
	door de naam met de 2 haakjes in te typen, zoals drankje() in dit geval. Je kan 
	tussen de haakjes elementen maken zonder var en const. Je kan er meerdere maken door 
	ze op te splitsen met een komma. Als je de functie oproept, en je wat intypt op de 
	plaats van de elementen, dan wordt wat je intypt geplaats op elke plek in de functie 
	waar je die element aanroept. Wat er tussen haakje staat bij de elementen worden 
	de parameters genoemd. Je kan var en const elementen gemaakt in een function 
	niet erbuiten gaan gebruiken, maar je kan var en const elementen gemaakt buiten een
	function in een function gaan gebruiken. Ik heb de code in button geplaats bij de html
	script door de naam van de functie te typen bij onclick.*/
	
	var bestelling = "bestellen"
	
	while (bestelling != "stop") {/*Met while worden de codes tussen de accoladen herhadelijk
		aangeroepen totdat er nietmeer aan de voorwaarde tussen de haakjes wordt voldaan.
		In dit geval is de voorwaarde "zolang de code in bestelling niet stop is". Met != 
		wordt er aangegeven dat het element bestelling niet gelijk moet gaan zijn aan stop*/
		var bestellingmaken = prompt("Welke bestelling wilt u toevoegen? U kunt kiezen uit fris, bier, wijn en bitterballen. Als u bitterballen wilt bestellen, type dan snack in. Als u niks wil gaan bestellen, type dan nee in, en als je klaar ben met bestellen, type dan stop in.")
		/*Met prompt wordt er een vraag gesteld, en met = en var wordt het antwoord van die vraag opgeslagen. Als je stop invoert*/
		bestelling = bestellingmaken.toLowerCase(); /*Met bestellingmaken.toLowerCase() worden de 
		hoofdletters in het element bestellingmaken opgeslagen in bestelling als kleine letters vanwege =. Dit is nodig
		omdat javascript hoofdlettergevoelig is. Zo als je STOP zal gaan typen inplaats van stop, zal de loop niet gaan stoppen.*/
		
		if (bestelling == "fris"){ /*Met if wordt de code uitgevoerd die tussen de acolades staat als
		er wordt voldaan aan de voorwaarde tussen haakjes. In dit geval moet het element bestelling 
		gelijk zijn aan fris vanwege ==. De reden waarom het == is en niet =, is omdat = al gebruikt
		wordt in javascript om code op te slaan in elementen. Je kan if maar één keer gebruiken.
		Als je bij de vraag gesteld bij het element bestellingmaken fris invoert, dan zullen alle codes
		tussen de accolades van deze code worden uitgevoerd*/
			var hoeveelfris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
			totaalfris = hoeveelfris * prijsfris		 /*De code van totaalfris wordt veranderd in de vermedigvuldiging van de elementen
														   hoeveelfris en prijsfris*/
			bon += hoeveelfris + " fris <br>"            /*Als je de naam van het element intypt en daarna het = teken met wat code daarachter,
														 dan vervangt dat element de code die het ervoor had met de code achter =. Met += voeg 
														 je code erachter aan toe. De extra + is nodig om "fris <br>" er extra aan de code toe 
														 te voegen samen met het element hoeveelfris. Met <br> maak ik een lijnbreek. De codes
														 " fris <br>" en die ene in hoeveelfris worden aan het element bon toegevoegd op 
														 volgorde van links naar rechts.*/
			rekening += "\u20AC" + totaalfris + "<br>"   /*Met "\u20AC" kan ik € gebruiken in javascript, wat om de één of andere reden niet 
														   op de normale manier mogelijk is. De euroteken, samen met de code in totaalfris
														   en "<br>" worden opgeslagen in rekening*/
		}
		
		else if (bestelling == "bier"){  /*Als je andere codes wilt laten uitvoeren als er 
										 aan een andere conditie moet worden voldaan,
										 ondanks het feit dat if maar één keer gebruikt kan worden,
										 dan moet je else if gebruiken. De conditie staat hier ook
										 tussen haakjes, en de code die je wilt laten uitvoeren staan
										 ook tussen de accolades. */
			var hoeveelbier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");   /*Het antwordt van de vraag bij de prompt wordt 
			                                                                                opgeslagen in hoeveelbier*/
			totaalbier=hoeveelbier * prijsbier			   /*De code van totaalbier wordt veranderd in de vermedigvuldiging van de elementen
														   hoeveelbier en prijsbier*/
			bon+=hoeveelbier + " bier <br>"				   //De code in hoeveelbier wordt samen met " bier <br>" toegevoegd aan bon
			rekening+="\u20AC" + totaalbier+"<br>"		   /*De euroteken, samen met de code in totaalbier
														   en "<br>" worden toegevoegd aan rekening*/
		}
		
		else if (bestelling == "wijn"){                    //De code tussen de acolade wordt aangeroepen als bestelling gelijk is aan wijn
			var hoeveelwijn = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");   /*Het antwordt van de vraag bij de prompt wordt 
			                                                                                opgeslagen in hoeveelwijn*/
			totaalwijn = hoeveelwijn*prijswijn			   /*De code van totaalwijn wordt veranderd in de vermedigvuldiging van de elementen
														   hoeveelwijn en prijswijn*/
			bon += hoeveelwijn + " wijn <br>"			   //De code in hoeveelwijn wordt samen met " wijn <br>" toegevoegd aan bon              
			rekening += "\u20AC" + totaalwijn + "<br>"     /*De euroteken, samen met de code in totaalwijn
														   en "<br>" worden toegevoegd aan rekening*/
		}

		else if(bestelling=="snack"){                    //De code tussen de acolade wordt aangeroepen als bestelling gelijk is aan snack
			var hoeveelsnack = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")   /*Het antwordt van de vraag bij de prompt wordt 
			                                                                                opgeslagen in hoeveelsnack*/
			if (hoeveelsnack==8 || hoeveelsnack==16){ /*Met || voeg je 2 condities toe. Als er aan
													    minstens één ervan wordt voldaan, dan worden 
													    de codes in de acolades uitgevoerd.*/
				totaalsnack=hoeveelsnack*prijssnack        /*De code van totaalsnack wordt veranderd in de vermedigvuldiging van de elementen
														   hoeveelsnack en prijssnack*/
				bon+=hoeveelsnack+" bitterballen <br>"     //De code in hoeveelsnack wordt samen met " bitterballen <br>" toegevoegd aan bon 
				rekening+="\u20AC"+totaalsnack+"<br>"      /*De euroteken, samen met de code in totaalsnack
														   en "<br>" worden toegevoegd aan rekening*/
			}
			else{  /*De codes in de acolades van de else statement wordt uitgevoerd als er niet wordt voldaan aan de if en else if statement.*/
				alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
				//De tekst tussen haakjes in alert wordt in een pop up getoond
			}
		}
		
		else if (bestelling=="stop"){                    //De code tussen de acolade wordt aangeroepen als bestelling gelijk is aan stop
			var totaalprijs=totaalfris+totaalbier+totaalwijn+totaalsnack;
			bon+="totaal";                                 //totaal wordt toegevoegd aan de code in bon
			rekening+="\u20AC"+totaalprijs                 /*De euroteken, samen met de code in totaalprijs
														   en worden toegevoegd aan rekening*/		   
			rekeningschrijven(bon, rekening)       //De functie rekeningschrijven wordt aangeroepen, en 
												   //de codes in bon en rekening worden geplaats op de parameters van de functie
		}

		else{	/*De codes in de acolades van de else statement wordt uitgevoerd als er niet wordt voldaan aan de if en else if statement.*/
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd")
			//De tekst tussen haakjes in alert wordt in een pop up getoond
		}
	}
}

function rekeningschrijven(bon, rekening){                   //De codes tussen de acolades worden gebruikt als de functie wordt aangeroepen,
															 //en bon en rekening zijn de parameters.
	document.getElementById("bon").innerHTML=bon;            /*Met document.getElementById().innerhtml word de zin geschreven op
															 de plaats met de id in de html code die staat tussen haakjes bij getElementById, in
															 dit geval bon. Wat er wordt opgeschreven is wat er achter = staat,
															 in dit geval de code wat in de parameter bon is opgeslagen.*/
	document.getElementById("rekening").innerHTML=rekening;  /*Alles wat in de parameter rekening is opgeslagen wordt opgeschreven
	                                                         in het html schrift bij de id rekening*/
}