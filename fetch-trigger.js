const fetch = require('node-fetch');

fetch('https://triangular-heathered-mimosa.glitch.me/')
    .then((r) => r.text())
    .then(console.log, console.error); // selhoz perepis

fetch('https://playful-jade-wish.glitch.me/')
    .then((r) => r.text())
    .then(console.log, console.error); // metrycs
