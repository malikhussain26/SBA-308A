import { fetchData, searchAkatsukiMembers } from "./utils.js";
import { updateSearchResults } from "./dom.js";

// console.log("Hello Naruto Universe!")
const apiBaseUrl = 'https://dattebayo-api.onrender.com';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

const searchResults = document.createElement('div');


searchButton.addEventListener('click', async () => {
  const searchTerm = searchInput.value;
  const collectionName = 'characters';

  try {
    const data = await fetchData(`${apiBaseUrl}/${collectionName}?name=${searchTerm}`);
    updateSearchResults(data);
  } catch (error) {
    console.error('Error searching:', error);
  }
});

const searchTerm = 'Itachi';
searchAkatsukiMembers(searchTerm)
  .then(data => {
    console.log('Akatsuki members:', data);
    // Updates the UI with the Akatsuki members (you can call updateSearchResults here if needed)
  })
  .catch(error => {
    console.error(error);
  });

// createData that will make a Post request to the API using await/async
// (I believe this API cannot use POST, Put, or Patch)
//It was too late before I noticed this.
// But this is the code I would use if it could use those methods. 
// async function createData(data) {
//   try {
//       const response = await fetch('https://dattebayo-api.onrender.com/characters', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//       });
//       if (response.ok) {
//           console.log('Data created successfully');
//       } else {
//           console.error('Error creating data:', response.status);
//       }
//   } catch (error) {
//       console.error('Error creating data:', error);
//   }
// }
// const newData = {
//     name: 'Malik',
//     age: 27
// };

// createData(newData);