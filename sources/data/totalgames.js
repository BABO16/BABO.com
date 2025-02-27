let totalGames = [
    {name: "Calculate Something", file: "calculator"},
    {name: "Date & Time", file: "calender"},
    {name: "Count Some Numbers", file: "counter"},
    {name: "Roll Dices", file: "dice"},
    {name: "Guess a Number", file: "guessing"},
    {name: "Stop the Watch", file: "stopwatch"},
    {name: "Fun", file: "tatakaiboxs"}
    
];

function shuffle(array) {
    for(let i = array.length - 1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [array[i], array[random]] = [array[random], array[i]];
    };
};

shuffle(totalGames);
totalGames = totalGames.slice(0, 3);

export {totalGames};
