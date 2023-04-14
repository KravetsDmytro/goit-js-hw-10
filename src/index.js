import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const messageInfo =
  'Too many matches found. Please enter a more specific name.';
const messageFailure = 'Oops, there is no country with that name';
const typeFailure = 'failure';
const typeInfo = 'info';

searchBox.addEventListener('input', debounce(findCountries, DEBOUNCE_DELAY));

function findCountries(event) {
  event.preventDefault();
  const countryName = searchBox.value.trim();

  if (!countryName) {
    clearMarkup();
    return;
  }

  fetchCountries(countryName).then(createAndShowList).catch(showError);
}

function createAndShowList(usersdata) {
  if (usersdata.length > 10) {
    clearMarkup();
    showMessage(typeInfo, messageInfo);
  } else if (usersdata.length <= 10 && usersdata.length >= 2) {
    clearMarkup();
    dataMarkup(usersdata);
  } else if (usersdata.length === 1) {
    clearMarkup();
    singleDataMarkup(usersdata);
  }
}

function showMessage(type, message) {
  Notiflix.Notify[type](message);
}

function showError(error) {
  // Notify.failure('messageFailure');
  showMessage(typeFailure, messageFailure);
  clearMarkup();
}

function clearMarkup() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}

function dataMarkup(usersdata) {
  const dataMarkup = usersdata
    .map(userdata => {
      return `
  <li><p class="country"><img src='${userdata.flags.svg}'width='40px' height='30px'> &nbsp;  ${userdata.name.official}</p>
  </li>
  `;
    })
    .join(' ');
  countryList.innerHTML = dataMarkup;
}

function singleDataMarkup(usersdata) {
  const singleDataMarkup = usersdata
    .map(userdata => {
      return `
  <h2><img src='${userdata.flags.svg}'width='40px' height='30px'> &nbsp; ${
        userdata.name.official
      }</h2>
  <ul>
  <li><span class="country"><b> Capital:</b></span> ${userdata.capital}</li>
  <li><span class="country"><b> Population:</b></span> ${userdata.population}</li>
  <li><span class="country"><b> Languages:</span> ${Object.values(userdata.languages)}</li>
  </ul>
  `;
    })
    .join(' ');
  countryInfo.innerHTML = singleDataMarkup;
}

// fetch('`https://restcountries.com/v3.1/name/ukraine?fields=name,capital,population,flags,languages`').then(response => {
// console.log(response.json)

// return response.json()})
// .then(countr=>{console.log(countr)})
// .catch(error=>{console.error()})

// searchBox.addEventListener('input' ,debounce(searhCountries, DEBOUNCE_DELAY));

// function searhCountries(evt){
// evt.preventDefault();
// const countryName = searchBox.value.trim();
// console.log(countryName)
//   if (!countryName) {
//     clearMarkup();
//     return;
//   }
//   fetchCountries(countryName).then(createShowList)
//   //  .catch(showError);
// }

// function createShowList(usersdata) {
//   if (usersdata.length > 10) {
//     clearMarkup();
//     Notify.success(messageInform)
//     } else if (usersdata.length <= 10 && usersdata.length >= 2) {
//     clearMarkup();
//     function dataMarkup(usersdata) {
//       const dataMarkup = usersdata
//         .map(userdata => {
//           return `
//       <li><p><img src='${userdata.flags.svg}' height='25px'>${userdata.name.official}</p>
//       </li>
//       `;
//         })
//         .join(' ');
//       countryList.innerHTML = dataMarkup;
//     }

//     // dataMarkup(usersdata);
//   } else if (usersdata.length === 1) {
//     clearMarkup();
//     singleDataMarkup(usersdata);
//   }
// }
