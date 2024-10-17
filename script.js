console.log("hello world")
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

// Search for Naruto Characters

    

async function searchCharacters(characterName) {
    console.log('Searching for character:', characterName);
    try {
      const response = await fetch(`https://dattebayo-api.onrender.com/characters?q=${characterName}`);
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
  
      // Find the character that matches the search query
      const character = data.characters.find((character) => character.name.toLowerCase() === characterName.toLowerCase());
  
      if (character) {
        // Display the character details
        const characterDetails = document.getElementById('character-details');
        characterDetails.innerHTML = `
          <h2>${character.name}</h2>
          <p>${character.description}</p>
        `;
      } else {
        console.log('No character found matching the search query');
      }
    } catch (error) {
      console.error('Error searching character:', error);
    }
  }
      
      window.onload = function() {
        document.getElementById('search-button').addEventListener('click', function() {
          const characterName = document.getElementById('character-search-input').value;
          searchCharacters(characterName);
        });
      };
