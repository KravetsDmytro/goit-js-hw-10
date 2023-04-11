import './css/styles.css';
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;

fetch('`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`').then(response => {
console.log(response.json)

return response.json()})
.then(countr=>{console.log(countr)})
.catch(error=>{console.error()})