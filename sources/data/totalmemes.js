let totalMemes = ["charmender", "dadmeme", "bro", "clapping",
                    "dance", "hi", "laugh", "looks", "shock",
                    "uchia"];

function shuffle(array) {
    for(let i = array.length - 1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [array[i], array[random]] = [array[random], array[i]];
    };
};

shuffle(totalMemes);
totalMemes = totalMemes.slice(0, 5);

export {totalMemes};
