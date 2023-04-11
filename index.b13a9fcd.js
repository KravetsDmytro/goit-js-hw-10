fetch("`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`").then((o=>(console.log(o.json),o.json()))).then((o=>{console.log(o)})).catch((o=>{console.error()}));
//# sourceMappingURL=index.b13a9fcd.js.map
