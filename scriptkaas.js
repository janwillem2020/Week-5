var CheeseColor = prompt("Is de kaas geel?");

    if (CheeseColor == "ja") {
        var CheeseHoles = prompt("Zitten er gaten in?");
    }
        else if (CheeseHoles == "nee") {
            var CheeseStone = prompt("Is de kaas zo hard als steen?");
        }
            if (CheeseStone == "ja") {
                alert("Uw kaas is: Parmigiano Reggiano.");
            }
            else if (CheeseStone == "nee") {
                alert("Uw kaas is: Goude kaas.");
            }
        if (CheeseHoles == "ja") {
            var CheeseExpensive = prompt("Is de kaas belachelijk duur?");
        }
            if (CheeseExpensive == "ja") {
                alert("Uw kaas is: Emmenthaler.");
            }
            else if (CheeseExpensive == "nee") {
                alert("Uw kaas is: Leerdammer.");
            }
    else if (CheeseColor == "nee") {
        var CheeseBlue = prompt("Heeft de kaas blauwe schimmels?");
    }
        if (CheeseBlue == "ja") {
            var CheeseCrust = prompt("Heeft de kaas een korst?");
        }
            if (CheeseCrust == "ja") {
                alert("Uw kaas is: Blue de Rochbaron.")
            }
            else if(CheeseCrust == "nee") {
                alert("Uw kaas is: Fourme d'Ambert.")
            }

        else if (CheeseBlue == "nee") {
            var CheeseKorst = prompt("Heeft de kaas een korst?")
        }
            if (CheeseKorst == "ja") {
                alert("Uw kaas is: Camembert.")
            }
            else if (CheeseKorst == "nee") {
                alert("Uw kaas is: Mozzarella")
            }