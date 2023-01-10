//Javascript
function scoreTotal() {

    //Player Info
    let playerName = document.getElementById("playerName").value;
    
    //Passing Stats
    let passingTd = document.getElementById("passingTd").value * 4;
    let interceptions = document.getElementById("interceptions").value * -2;
    let completions = document.getElementById("completions").value * .25;
    let incompletions = document.getElementById("incompletions").value * -.25;
    let sacks = document.getElementById("sacks").value * -1;
    let passingYds = document.getElementById("passingYds").value / 30;
    let pickSixes = document.getElementById("pickSixes").value * -1;
    let fortyYdComps = document.getElementById("fortyYdComps").value * 1;
    let fortyYdPTds = document.getElementById("fortyYdPTds").value * 1;

    //Rushing stats
    let rushingTds = document.getElementById("rushingTds").value * 6;
    let rushingAttempts = document.getElementById("rushingAttempts").value * .20;
    let rushingYds = document.getElementById("rushingYds").value / 15;
    let fortyYdRushTds = document.getElementById("fortyYdRushTds").value * 1;
    let rushingFirstDowns = document.getElementById("rushingFirstDowns").value * .25;

    //Receiving Stats
    let receivingTds = document.getElementById("receivingTds").value * 6;
    let recs = document.getElementById("recs").value * 1;
    let recYds = document.getElementById("recYds").value / 10;
    let fortyYdsRecs = document.getElementById("fortyYdsRecs").value * .5;
    let fortyYdTdRec = document.getElementById("fortyYdTdRec").value * 2;
    let receivingFirstDowns = document.getElementById("receivingFirstDowns").value * .25;

    //Return Stats
    let retTds = document.getElementById("retTds").value * 6;
    let retYds = document.getElementById("retYds").value /50;

    //Miscellaneous
    let twoPtConv = document.getElementById("twoPtConv").value * 2;
    let fum = document.getElementById("fum").value * -1;
    let fumLost = document.getElementById("fumLost").value * -1;
    let offFumRetTds = document.getElementById("offFumRetTds").value * 6;

    //Kickers
    let kickMade0to19 = document.getElementById("kickMade0to19").value * 3;
    let kickMissed0to19 = document.getElementById("kickMissed0to19").value * -2;
    let kickMade20to29 = document.getElementById("kickMade20to29").value * 3;
    let kickMissed20to29 = document.getElementById("kickMissed20to29").value * -1;
    let kickMade30to39 = document.getElementById("kickMade30to39").value * 3;
    let kickMissed30to39 = document.getElementById("kickMissed30to39").value * -1;
    let kickMade40to49 = document.getElementById("kickMade40to49").value * 4;
    let kickMissed40to49 = document.getElementById("kickMissed40to49").value * -1;
    let kickMade50AndUp = document.getElementById("kickMade50AndUp").value * 5;
    let xpMade = document.getElementById("xpMade").value * 1;
    let xpMissed = document.getElementById("xpMissed").value * -1;


    let total = passingTd + interceptions + completions + incompletions + sacks + passingYds + pickSixes + fortyYdComps + fortyYdPTds + rushingTds + rushingAttempts + rushingYds + fortyYdRushTds + rushingFirstDowns + rushingFirstDowns + receivingTds + recs + recYds + fortyYdsRecs + fortyYdTdRec + receivingFirstDowns + retTds + retYds + twoPtConv + fum + fumLost + offFumRetTds + kickMade0to19 + kickMissed0to19 + kickMade20to29 + kickMissed20to29 + kickMade30to39 + kickMissed30to39 + kickMade40to49 + kickMissed40to49 + kickMade50AndUp + xpMade + xpMissed;

    //Display Player Name
    document.getElementById("player").innerHTML = playerName;

    //Display Player's Individual Points
    //Passing Stats
    document.getElementById("pTds").innerHTML = passingTd;
    document.getElementById("ints").innerHTML = interceptions;
    document.getElementById("comp").innerHTML = completions;
    document.getElementById("incomp").innerHTML = incompletions;
    document.getElementById("timesSacked").innerHTML = sacks;
    document.getElementById("pYds").innerHTML = passingYds;
    document.getElementById("6s").innerHTML = pickSixes;
    document.getElementById("40ydComp").innerHTML = fortyYdComps;
    document.getElementById("40ydTd").innerHTML = fortyYdPTds;
    //Rushing Stats
    document.getElementById("rTds").innerHTML = rushingTds;
    document.getElementById("rAtt").innerHTML = rushingAttempts;
    document.getElementById("rYds").innerHTML = rushingYds;
    document.getElementById("40ydRun").innerHTML = fortyYdRushTds;
    document.getElementById("1stDownRun").innerHTML = rushingFirstDowns;
    //Receiving Stats
    document.getElementById("recTds"). innerHTML = receivingTds;
    document.getElementById("receptions"). innerHTML = recs;
    document.getElementById("recYards"). innerHTML = recYds;
    document.getElementById("40ydRec"). innerHTML = fortyYdsRecs;
    document.getElementById("40ydRecTd"). innerHTML = fortyYdTdRec;
    document.getElementById("1stDownRec"). innerHTML = receivingFirstDowns;
    //Return Stats
    document.getElementById("returnTd"). innerHTML = retTds;
    document.getElementById("returnYards"). innerHTML = retYds;
    //Miscellaneous Stats
    document.getElementById("2ptConv"). innerHTML = twoPtConv;
    document.getElementById("fumble"). innerHTML = fum;
    document.getElementById("lostFumble"). innerHTML = fumLost;
    document.getElementById("offFumbleRetTDs"). innerHTML = offFumRetTds;
    //Kicking Stats (That work so far)
    document.getElementById("fg0to19"). innerHTML = kickMade0to19;
    document.getElementById("missed0to19"). innerHTML = kickMissed0to19;
    document.getElementById("fg20to29"). innerHTML = kickMade20to29;
    document.getElementById("missed20to29"). innerHTML = kickMissed20to29;
    document.getElementById("fg30to39"). innerHTML = kickMade30to39;
    document.getElementById("missed30to39"). innerHTML = kickMissed30to39;
    document.getElementById("fg40to49"). innerHTML = kickMade40to49;
    document.getElementById("missed40to49"). innerHTML = kickMissed40to49;
    document.getElementById("fg50Up"). innerHTML = kickMade50AndUp;

    document.getElementById("patMade"). innerHTML = xpMade;
    document.getElementById("patMissed"). innerHTML = xpMissed;



    //Display Total Score
    document.getElementById("totalScore").innerHTML = total;
};