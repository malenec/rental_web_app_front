// import React, { useEffect, useState } from 'react';

// function ViewRentalsListAdmin({ user }) {
//   const [rentals, setRentals] = useState([]);
//   const [savedMessage, setSavedMessage] = useState("");

//   useEffect(() => {
//     fetch('https://mavle.dk/tomcat/rental_web_app/api/rental/all')
//       .then(response => response.json())
//       .then(data => {
//         const updatedRentals = data.map(rental => {
//           const isUserSignedUp = rental.users.includes(user.username);
//           return {
//             ...rental,
//             isUserSignedUp
//           };
//         });
//         setRentals(updatedRentals);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, [user]);

//   const handleAssignRental = (id) => {
//     const data = {
//       id: id
//     };
  
//     const isUserSignedUp = rentals.find(rental => rental.id === id).isUserSignedUp;

//     if (isUserSignedUp) {

//       fetch(`https://mavle.dk/tomcat/rental_web_app/api/rental/remove/${user.username}/${rental.id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setSavedMessage(`Du er nu afmeldt ${data.id}`);

//           const updatedRentals = rentals.map(rental => {
//             if (rental.id === id) {
//               return {
//                 ...rental,
//                 isUserSignedUp: false
//               };
//             }
//             return rental;
//           });
//           setRentals(updatedRentals);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     } else {

//       fetch(`https://mavle.dk/tomcat/rental_web_app/api/rental/assign/${user.username}/${rental.id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setSavedMessage(`Du har nu tilmeldt dig ${data.rentalName}`);

//           const updatedRentals = rentals.map(rental => {
//             if (rental.rentalName === rentalName) {
//               return {
//                 ...rental,
//                 isUserSignedUp: true
//               };
//             }
//             return rental;
//           });
//           setRentals(updatedRentals);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };
  
//   return (
//     <div style={{ padding: '50px' }}>
//       {savedMessage && <div style={{ padding: '50px' }}>{savedMessage}</div>}
//       <table>
//         <thead>
//           <tr>
//             <th style={{ padding: '20px' }}>Lejekontrakts ID</th>
//             <th style={{ padding: '20px' }}>Startdato</th>
//             <th style={{ padding: '20px' }}>Slutdato</th>
//             <th style={{ padding: '20px' }}>Årlig pris</th>
//             <th style={{ padding: '20px' }}>Depositum</th>
//             <th style={{ padding: '20px' }}>Kontaktperson</th>
//             <th style={{ padding: '20px' }}>Husets ID</th>
//             <th style={{ padding: '20px' }}>Lejere</th>
//           </tr>
//         </thead>
//         <tbody>
//   {rentals.map(rental => (
//     <tr key={rental.id}>
//       <td style={{ padding: '20px' }}>{rental.id}</td>
//       <td style={{ padding: '20px' }}>{rental.startDate}</td>
//       <td style={{ padding: '20px' }}>{rental.endDate}</td>
//       <td style={{ padding: '20px' }}>{rental.priceAnnual}</td>
//       <td style={{ padding: '20px' }}>{rental.deposit}</td>
//       <td style={{ padding: '20px' }}>{rental.contactPerson}</td>
//       <td style={{ padding: '20px' }}>{rental.house}</td>
//       <td style={{ padding: '20px' }}>
//         {rental.users.length > 0 ? (
//           <ul>
//             {rental.users.map((username, index) => (
//               <li key={index}>{username}</li>
//             ))}
//           </ul>
//         ) : (
//           <p> Du har ingen lejere i dette hus i den givne periode endnu </p>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>

//       </table>
//     </div>
//   );
// }

        
// export default ViewRentalsListAdmin;
