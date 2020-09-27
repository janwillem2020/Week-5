alert("Welkom bij mijn Choice game. In deze game moet je keuzes gaan maken. Je moet wel 18 jaar of ouder zijn om mijn game te kunnen spelen.")

while (Bevestiging != "ja") {
    var Bevestiging = prompt("Typ 'ja' om door te gaan.");

    if (Bevestiging != "ja") {
        alert("Je antwoord voldoet niet aan de eisen. Probeer het opnieuw");
    }
}

var Naam = prompt("Hoe heet je?");

while(true) {
    var Leeftijd = prompt("Hoe oud ben je?")

    if (Leeftijd < "18") {
        alert("Je bent helaas niet oud genoeg om mijn game te spelen. Probeer het opnieuw.")
    }
    else {
        break;
    }
}

alert("Je zit vast in een doolhof. Kom eruit voordat je opgegeten wordt door het monster.");

var Begin = prompt("Waar ga je heen, 'links' of 'rechts'?");

//Links
if (Begin == "links") {
    alert("Je ziet dat je bij het hol van het monster zit. Je rent snel weg met het monster achter je aan.");
    var Links = prompt("Ga je met de trap naar boven of de ladder? Typ het zo: 'trap' 'ladder'");

    //Trap
    if (Links == "trap") {
        alert("Je pakt de trap naar boven en het monster is nog steeds achter je. Omdat je zo erg haast glip je weg op de trap en glij je helemaal naar beneden. Het monster heeft je te pakken.");
        document.write("<h1>" + "Je bent dood!" + "</h1>");
        stop
    }

    //Ladder
    else if (Links == "ladder") {
        alert("Omdat het monster niet een ladder kan beklimmen ben je veilig weggekomen. Je komt aan bij een stel stropers die je kleren willen hebben. De enige manier hoe je nu weg kunt komen is door het goede antwoord te geven.")
        var Ladder = prompt("Hoeveel is 9 + 10? Is het goede antwoord '19' of '21'. Het foute antwoord resulteert in een slachtpartij");

        //19
        if (Ladder == "19") {
            alert("Goedzo! Je mag van de stropers verder lopen. Het monster is via de trap omhoog gekomen en zit nu vlak achter je. Omdat het monster sneller is dan jij, moet je iets verzinnen om weg te komen.");
            var Vlinder = prompt("Je ziet een levensgrote vlinder die je een lift wil geven voor 5 euro. Doe je het of niet? 'ja''nee'.");

            if (Vlinder == "ja") {
                alert("Je vliegt samen met de levensgrote vlinder naar de uitgang van het doolhof en je bent eindelijk vrij.");
                document.write("<h1>" + "Je hebt gewonnen!" + "</h1>");
                stop
            }
            else if (Vlinder == "nee") {
                alert("Het monster eet je levend op.");
                document.write("<h1>" + "Je bent dood!" + "</h1>");
                stop
            }
        }
        //21
        else if (Ladder == "21") {
            alert("Leuk geprobeerd... Je wordt dood geshankt.");
            document.write("<h1>" + "Je bent dood!" + "</h1>");
            stop
        }
    }
}

//Rechts
else if (Begin == "rechts") {
    alert("Je komt bij een meisje aan die alleen in het donker zit in een hoekje");
    var Rechts = prompt("Ga je er naar toe of laat je haar met rust. Typ het zo: 'er naar toe' 'laat met rust'")

    //Meisje naar toe
    if (Rechts == "er naar toe") {
        alert("Je loopt er langzaam naartoe. Ze draait zich om en... Ze heeft schone kleren voor je. Je loopt verder.");
        var Meisje = prompt("Je komt bij een brug aan en krijgt de keuze om een veilige maar slome weg te nemen of de snelle maar riskante weg. Typ het zo: 'veilig' 'riskant'");
        
        //Brug Veilig
        if (Meisje == "veilig") {
            alert("Je bent veilig naar de overkant gekomen. Het monster zit nu wel erg vlak achter je. Omdat het monster nu vlak achter je zit ben je met haast naar een hol gegaan voor een schuil plek. Het is donker buiten.");
            var Veilig = prompt("Blijf je in de tunnel slapen of ga je verder op zoek naar de uitgang? Typ het zo; 'slapen' 'verder'");
            
            //Slapen
            if (Veilig == "slapen") {
                alert("Je hebt een goede nachtrust gehad en je bent weer fit om verder te zoeken naar de uitgang. En na urenlang zoeken en keuzes maken heb je het eindelijk gevonden. De uitgang.")
                document.write("<h1>" + "Je hebt gewonnen!" + "</h1>");
                stop
            }
            //Uitgang
            if (Veilig == "verder") {
                alert("Je gaat verder met zoeken. En na uren lang zoeken heb je de uitgang nog steeds niet gevonden. Je bent zo moe. Je valt neer op de grond en je wordt niet meer wakker omdat het monster je heeft opgegeten");
                document.write("<h1>" + "Je bent dood!" + "</h1>");
                stop
            }
        }
        //Brug Riskant
        else if (Meisje == "riskant") {
            alert("Je bent met een gebroken arm aan de overkant gekomen. Gelukkig is het monster nergens te vinden. Je ziet een rare tunnel, je loopt naar het einde van de tunnel en je ziet... nog een doolhof.");
            var Riskant = prompt("Je hebt de keuze om naar links of rechtdoor te gaan. Typ het zo: 'links' 'rechtdoor'");
            
            //Links
            if (Riskant == "links") {
                alert("Je ziet het monster daar zitten. Gelukkig slaapt het. Je wilt langs het monster gaan.");
                var Monster = prompt("Ga je links vlak langs het monster of rechts verder van het monster vandaan? Typ het zo: 'links' 'rechts'");
                
                //Doolhof Monster
                if (Monster == "links") {
                    alert("Het monster is wakker geworden en heeft je met huid en al opgegeten");
                    document.write("<h1>" + "Je bent dood!" + "</h1>");
                    stop
                }
                else if (Monster == "rechts") {
                    alert("Je gaat verder van het monster vandaan en ziet de uitgang van het doolhof.");
                    document.write("<h1>" + "Je hebt gewonnen!" + "</h1>");
                    stop
                }
            }
            //Rechtdoor
            else if (Riskant == "rechtdoor") {
                alert("Je ziet de uitgang van het 2e doolhof en je loopt naar buiten");
                document.write("<h1>" + "Je hebt gewonnen" + "</h1>");
                stop
            }
        }
    }
    //Meisje met rust
    else if (Rechts == "laat met rust") {
        alert("Je loopt verder. Je komt een Goblin tegen en zegt tegen je dat je al je geld moet geven. Je kijkt in je broekzak ziet dat je een 5je in je zak hebt. Geef je het 5je of niet.");
        var Doolhof6 = prompt("Typ het zo: 'geven' 'houden'");
        
        //Goblin Nemen Einde
        if (Doolhof6 == "houden") {
            alert("De Goblin is boos en hij whacked je op je hoofd.");
            document.write("<h1>" + "Je bent dood!" + "</h1>");
            stop
        } 
        //Goblin Geven
        else if (Doolhof6 == "geven") {
            alert("De Goblin is erg blij dat je het 5je hebt gegeven en laat je zonder enige problemen verder leven. Je bent bijna bij de uitgang.");
            var Einde = prompt("Je laatste critische keuze is: 'links' of 'rechts'");
            
            //Doolhof Einde
            if (Einde == "links") {
                alert("Gefeliciteert, daar is de uitgang.");
                document.write("<h1>" + "Je hebt gewonnen!" + "</h1>");
                stop
            }
            else if (Einde == "rechts") {
                alert("Gefeliciteert, daar is de uitgang.");
                document.write("<h1>" + "Je hebt gewonnen!" + "</h1>");
                stop
            }
        }
    }
}
document.write("<h1>" + "Naam: " + Naam + "<br>" + "Leeftijd: " + Leeftijd + "</h1>");
