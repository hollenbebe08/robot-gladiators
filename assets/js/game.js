var playerName= window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack= 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[2]);

//created fight function and this is an example of a function expression
var fight= function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like to fight or run
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            
        // if player picks "skip" confirm and then stop the loop
        if(promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip= window.confirm("Are you sure you'd like to quit?");
            
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                 //subtract money from playerMoney for skipping
                playerMoney= playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;

            //if no (false), ask question again by running fight() again
            } else {
                fight();
            }
        }
        
        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                
            //check my enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        }   
            
        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth= playerHealth - enemyAttack;
        console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        //check player's health
        if(playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        
        //if player did not choose 1 or 2 prompt
        // else {
        //    window.alert("You need to choose a valid option. Try again!");
        // }
    }; //end of fight function

//begin loop
for(var i=0; i <enemyNames.length; i++) {
    if(playerHealth >0) {
        window.alert("welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth=50;
        fight(enemyNames[i]);
    }
}

// run fight function to start game
fight()
