fetch("`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`").then((function(n){return console.log(n.json),n.json()})).then((function(n){console.log(n)})).catch((function(n){console.error()}));
//# sourceMappingURL=index.39023cfc.js.map
