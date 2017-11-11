let buttonPressSeries = new ButtonPressSeries();
let roundManager = new RoundManager(buttonPressSeries,0,0,false);

var handleUserButtonPress = (event) => {  
    
        roundManager.handlePlayerInput(event.target);

    };
    
var start = (event) => { 
    event.target.setAttribute("value","Restart");
    roundManager.reset();
    roundManager.readyForNextRound = true;
    
    }

setInterval( () => { 
    if (roundManager.readyForNextRound)
        roundManager.nextRound() }, 3000);








