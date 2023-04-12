import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searhBox=document.querySelector('input#search-box');
const countryList=document.querySelector('.country-list');
const countryInfo=document.querySelector('.country-info')


fetch('`https://restcountries.com/v3.1/name/ukraine?fields=name,capital,population,flags,languages`').then(response => {
console.log(response.json)

return response.json()})
.then(countr=>{console.log(countr)})
.catch(error=>{console.error()})