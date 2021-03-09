'use strict'

// const fetch = require('node-fetch');

async function getMostRecentRepo() {
    const owner = 'GrantPSpencer'

    let eventsresponse = await fetch('https://api.github.com/users/grantpspencer/events');
    
    let events = await eventsresponse.json();

    let repo = events[0].repo.name;
    let repolink = repo;
    console.log(repo);
    repo = String(repo).replace('GrantPSpencer/','');
    console.log(repo);

    let lastseen = document.getElementById('last-seen');

    lastseen.innerHTML = `I was last seen working on <a href='https://github.com/${repolink}' >${repo}</a>`;

    return repo;
}

getMostRecentRepo();


