export async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (error)   
   {
      console.error('Error fetching data:', error);
    }
  }
  
 // Promise to search for akatsuki members
 /**
  * This Promise function is not working anymore.
  * I must have done something to it because it was working before I modularized the script.js file
  */

 // export function searchAkatsukiMembers(searchTerm) {
//     return new Promise((resolve, reject) => {
//       fetch(`https://dattebayo-api.onrender.com/akatsuki`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             reject('Error searching for Akatsuki members:', response.status);
//           }
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject('Error searching for Akatsuki members:', error);
//         });
//     });
//   }

//   const searchTerm = 'Itachi';

// searchAkatsukiMembers(searchTerm)
//   .then(data => {
//     console.log('Akatsuki members:', data);
//     // Updates the UI with the Akatsuki members
//   })
//   .catch(error => {
//     console.error(error);
//   });