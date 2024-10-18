console.log("Hello Naruto Universe!")
const apiBaseUrl = 'https://dattebayo-api.onrender.com'

async function fetchData() {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com');
        GET
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        console.log(data);
        // will do something with data to the DOM
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const searchResults = document.createElement('div');

searchButton.addEventListener('click', async () => {
    const searchTerm = searchInput.value;
    const baseUrl = 'https://dattebayo-api.onrender.com';
    const collectionName = 'characters';
  
    try {
        const response = await fetch(`${'https://dattebayo-api.onrender.com'}/${collectionName}?name=${searchTerm}`);
        const data = await response.json();
      
        console.log('Search results:', data);
  
      searchResults.innerHTML = `
        <h2>Search Results</h2>
        <ul>
          ${data.characters.map((character) => `
            <li>
              <h3>${character.name}</h3>
              <ul>
                <li>Debut: ${character.debut.manga}</li>
                <li>Family: ${character.family.father} and ${character.family.mother}</li>
                <li>Jutsu: ${character.jutsu.slice(0, 5).join(', ')}</li>
                <li>Nature Type: ${character.natureType.slice(0, 5).join(', ')}</li>
                <li>Personal: ${character.personal.birthdate}, ${character.personal.sex}, ${character.personal.age.current}, ${character.personal.height.current}, ${character.personal.weight.current}</li>
                <li>Rank: ${character.rank.ninjaRank.name}</li>
                <li>Tools: ${character.tools.slice(0, 5).join(', ')}</li>
              </ul>
            </li>
          `).join('')}
        </ul>`;
  
      // Clear the results container and append the new results
      resultsContainer.innerHTML = '';
      resultsContainer.appendChild(searchResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  });


  // createData that will make a Post request to the API using await/async
  // (I believe this API cannot use POST, Put, or Patch)
  //It was too late before I noticed this.
  // But this is the code I would use if it could use those methods. 
//   async function createData(data) {
//     try {
//         const response = await fetch('https://dattebayo-api.onrender.com/characters', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         if (response.ok) {
//             console.log('Data created successfully');
//         } else {
//             console.error('Error creating data:', response.status);
//         }
//     } catch (error) {
//         console.error('Error creating data:', error);
//     }
// }
// const newData = {
//     name: 'Malik',
//     age: 27
// };

// createData(newData);

// Promise

function searchAkatsukiMembers(searchTerm) {
    return new Promise((resolve, reject) => {
      fetch(`https://dattebayo-api.onrender.com/teams?name=Akatsuki&members=${searchTerm}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            reject('Error searching for Akatsuki members:', response.status);
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject('Error searching for Akatsuki members:', error);
        });
    });
  }