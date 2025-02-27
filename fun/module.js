import { totalMemes } from "./../sources/data/totalmemes.js";
let Memes = [];

// Collect all promises for dynamic imports
const memePromises = totalMemes.map(async (meme) => {
    const { name, info, file } = await import(`./../sources/memes/${meme}.js`);
    return { name, info, meme, file };
});

Promise.all(memePromises).then((memeObjects) => {
    Memes = memeObjects;

    // Iterate over Memes after all imports are done
    Memes.forEach(meme => {
        const memesContainer = document.getElementById('memesContainer');

        const div = document.createElement('div');
        div.classList.add('tooltip');

        const img = document.createElement('img');
        img.src = `../sources/memes/${meme.meme}.${meme.file}`;
        div.appendChild(img);

        const name = document.createElement('h4');
        name.textContent = meme.name;
        div.appendChild(name);

        const tooltipText = document.createElement('span');
        tooltipText.classList.add('tooltiptext');
        tooltipText.textContent = meme.info;
        div.appendChild(tooltipText);

        memesContainer.appendChild(div);
    });
});

import { totalGames } from "./../sources/data/totalgames.js";

totalGames.forEach(game => {
    const gamesContainer = document.getElementById('gamesContainer');

    const gameDiv = document.createElement('div'); // Create a div to wrap each game link

    const a = document.createElement('a');
    a.href = `../sources/games/${game.file}/index.html`;

    const button = document.createElement('button');
    button.textContent = game.name;
    a.appendChild(button);
    
    const br = document.createElement('br');
    gameDiv.appendChild(br);

    gameDiv.appendChild(a); // Append the link to the div
    gamesContainer.appendChild(gameDiv); // Append the div to the container
});
