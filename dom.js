const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

const searchResults = document.createElement('div');

export function updateSearchResults(data) {
  searchResults.innerHTML = `
    <ul>
      ${data.characters.map((character) => `
        <li>
          <h3>${character.name}</h3>
          <ul>
            <li>Debut: ${character.debut.manga}</li>
            <li>Family: ${character.family.father} and ${character.family.mother}</li>
            <li>Jutsu: ${character.jutsu.slice(0, 5).join(', ')}</li>
            <li>Nature Type: ${character.natureType.slice(0, 5).join(', ')}</li>
            <li>Personal: ${character.personal.birthdate}, ${character.personal.sex}, ${character.personal.age && character.personal.age.current ? character.personal.age.current : ''}, ${character.personal.height && character.personal.height.current ? character.personal.height.current : ''}, ${character.personal.weight && character.personal.weight.current ? character.personal.weight.current : ''}</li>
            <li>Rank: ${character.rank && character.rank.ninjaRank ? character.rank.ninjaRank.name : ''}</li>
            <li>Tools: ${character.tools.slice(0, 5).join(', ')}</li>
          </ul>
        </li>
      `).join('')}
    </ul>
  `;
  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(searchResults);
}