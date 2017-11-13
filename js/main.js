let buttonPressSeries = new ButtonPressSeries();
let roundManager = new RoundManager(buttonPressSeries,0,0,false);

var showStopButton = () => document.getElementById("stop-button").style.display = "inline-block";

var hideStopButton = () => document.getElementById("stop-button").style.display = "none";

var handleUserButtonPress = (event) => {  
    
        roundManager.handlePlayerInput(event.target);

    };
    
var start = (event) => { 
    event.target.setAttribute("value","Restart");
    roundManager.reset();
    roundManager.readyForNextRound = true;
    showStopButton();
    
    }

var stop = () => {
    roundManager.readyForNextRound = false;
    hideStopButton();

};
setInterval( () => { 
    if (roundManager.readyForNextRound)
        roundManager.nextRound() }, 3000);








