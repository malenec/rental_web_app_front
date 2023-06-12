import React, { useEffect, useState } from 'react';
import UpdateRentalForm from './UpdateRentalForm';

function ViewRentalsListAdmin({ user }) {
  const [rentals, setRentals] = useState([]);
  const [savedMessage, setSavedMessage] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState({});
  const [selectedRental, setSelectedRental] = useState(null);

  useEffect(() => {
    fetch('https://mavle.dk/tomcat/rental_web_app/api/rental/all')
      .then(response => response.json())
      .then(data => {
        const updatedRentals = data.map(rental => {
          const isUserSignedUp = rental.users.includes(user.username);
          return {
            ...rental,
            isUserSignedUp,
            users: rental.users
          };
        });
        setRentals(updatedRentals);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [user]);

  useEffect(() => {
    fetch('https://mavle.dk/tomcat/rental_web_app/api/user/all')
      .then(response => response.json())
      .then(data => {
        const users = data.map(user => user.username);
        setExistingUsers(users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleAssignRental = (id, username) => {
    console.log('Assigning rental for id:', id);
    console.log('Username:', username);

    const rental = rentals.find(rental => rental.id === id);
    const isUserSignedUp = rental ? rental.users.includes(username) : false;

    if (isUserSignedUp) {
      fetch(`https://mavle.dk/tomcat/rental_web_app/api/rental/remove/${username}/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSavedMessage(`Lejeren ${username} er nu fjernet fra lejekontrakten med id: ${id}`);

          const updatedRentals = rentals.map(rental => {
            if (rental.id === id) {
              return {
                ...rental,
                isUserSignedUp: false,
                users: rental.users.filter(user => user !== username) // Remove assigned user from the list
              };
            }
            return rental;
          });
          setRentals(updatedRentals);

          setSelectedUsers(prevState => ({
            ...prevState,
            [id]: ""
          }));
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      fetch(`https://mavle.dk/tomcat/rental_web_app/api/rental/assign/${username}/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSavedMessage(`Lejeren ${username} er nu skrevet på lejekontrakten med id: ${data.rentalDTOListList[0].id}`);

          const updatedRentals = rentals.map(rental => {
            if (rental.id === id) {
              return {
                ...rental,
                isUserSignedUp: true,
                users: [...rental.users, username] // Add assigned user to the list
              };
            }
            return rental;
          });
          setRentals(updatedRentals);

          setSelectedUsers(prevState => ({
            ...prevState,
            [id]: username
          }));
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const handleDeleteRental = (id) => {
    fetch(`https://mavle.dk/tomcat/rental_web_app/api/rental/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          const updatedRentals = rentals.filter(rental => rental.id !== id);
          setRentals(updatedRentals);
          setSavedMessage(`Lejekontrakten med ID ${id} er nu blevet slettet.`);
        } else {
          throw new Error('Failed to delete rental');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleUpdate = updatedRental => {
    const updatedRentals = rentals.map(rental => {
      if (rental.id === updatedRental.id) {
        return updatedRental;
      }
      return rental;
    });
    setRentals(updatedRentals);
    setSavedMessage(`Lejekontrakten med ID ${updatedRental.id} er nu blevet opdateret.`);
    setSelectedRental(null);
  };
  
  const handleUpdateRental = rental => {
    setSelectedRental(rental);
  };
  

  return (
    <div style={{ padding: '50px' }}>
      {savedMessage && <div style={{ padding: '50px' }}>{savedMessage}</div>}
      <table>
        <thead>
          <tr>
            <th style={{ padding: '20px' }}>Lejekontrakts ID</th>
            <th style={{ padding: '20px' }}>Startdato</th>
            <th style={{ padding: '20px' }}>Slutdato</th>
            <th style={{ padding: '20px' }}>Årlig pris</th>
            <th style={{ padding: '20px' }}>Depositum</th>
            <th style={{ padding: '20px' }}>Kontaktperson</th>
            <th style={{ padding: '20px' }}>Husets ID</th>
            <th style={{ padding: '20px' }}>Lejere</th>
            <th style={{ padding: '20px' }}>Tildel bruger</th>
            <th style={{ padding: '20px' }}>Handlinger</th>
            <th style={{ padding: '20px' }}>Opdater</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map(rental => (
            <tr key={rental.id}>
              <td style={{ padding: '20px' }}>{rental.id}</td>
              <td style={{ padding: '20px' }}>{rental.startDate}</td>
              <td style={{ padding: '20px' }}>{rental.endDate}</td>
              <td style={{ padding: '20px' }}>{rental.priceAnnual}</td>
              <td style={{ padding: '20px' }}>{rental.deposit}</td>
              <td style={{ padding: '20px' }}>{rental.contactPerson}</td>
              <td style={{ padding: '20px' }}>{rental.house}</td>
              <td style={{ padding: '20px' }}>
                {rental.users.length > 0 ? (
                  <ul>
                    {rental.users.map((username, index) => (
                      <li key={index}>{username}</li>
                    ))}
                  </ul>
                ) : (
                  <p> Du har ingen lejere i dette hus i den givne periode endnu </p>
                )}
              </td>
              <td style={{ padding: '20px' }}>
                <select
                  value={selectedUsers[rental.id] || ""}
                  onChange={(e) =>
                    setSelectedUsers(prevState => ({
                      ...prevState,
                      [rental.id]: e.target.value
                    }))
                  }
                >
                  <option value="">Vælg bruger</option>
                  {/* Render the list of existing users */}
                  {existingUsers.map((user, index) => (
                    <option key={index} value={user}>{user}</option>
                  ))}
                </select>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAssignRental(rental.id, selectedUsers[rental.id])}
                >
                  {rental.isUserSignedUp ? 'Afmeld' : 'Tilmeld'}
                </button>
              </td>
              <td style={{ padding: '20px' }}>
                <button className="btn btn-danger" onClick={() => handleDeleteRental(rental.id)}>
                  Slet
                </button>
              </td>
              <td style={{ padding: '20px' }}>
                <button className="btn btn-primary" onClick={() => handleUpdateRental(rental)}>
                  Opdater
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRental && (
        <div>
          <h2>Opdater lejekontrakt</h2>
          <UpdateRentalForm rental={selectedRental} onUpdate={handleUpdate} />
        </div>
      )}
    </div>
  );
}

export default ViewRentalsListAdmin;
