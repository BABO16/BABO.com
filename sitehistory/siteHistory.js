import { version, date } from './../Sources/data/changelog.js';
document.getElementById('v').textContent = version;
document.getElementById('date').textContent = date;
import { credits, names } from './../Sources/data/credits.js';
document.addEventListener('DOMContentLoaded', () => {
    const namess = document.getElementById('names');
    const logos = document.getElementById('logos');
    names.forEach(credit => {
        const p = document.createElement('p');
        p.innerHTML = `<a href="${credit.link}">${credit.role}: <strong>${credit.name}</strong></a>`;
        p.style = `background: ${credit.color};`;
        p.classList.add('names')
        namess.appendChild(p);
    });
    credits.forEach(logo => {
        const a = document.createElement('a');
        a.href = logo.link;
    
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.src = `../Sources/credits/${logo.id}.png`;
        div.appendChild(img);
        
        const p = document.createElement('p');
        p.textContent = logo.name;
        div.appendChild(p)
        
        a.appendChild(div);
        
        logos.appendChild(a);
    });
});
