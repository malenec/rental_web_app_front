import React, { useEffect, useState } from 'react';

function ViewTripsListAdmin({ user }) {
  const [trips, setTrips] = useState([]);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    fetch('https://mavle.dk/tomcat/rental_web_app/api/trip/all')
      .then(response => response.json())
      .then(data => {
        const updatedTrips = data.map(trip => {
          const isUserSignedUp = trip.users.includes(user.username);
          return {
            ...trip,
            isUserSignedUp
          };
        });
        setTrips(updatedTrips);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [user]);

  const handleAssignTrip = (tripName) => {
    const data = {
      tripName: tripName
    };
  
    const isUserSignedUp = trips.find(trip => trip.tripName === tripName).isUserSignedUp;

    if (isUserSignedUp) {

      fetch(`https://mavle.dk/tomcat/rental_web_app/api/trip/remove/${user.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSavedMessage(`Du er nu afmeldt ${data.tripName}`);

          const updatedTrips = trips.map(trip => {
            if (trip.tripName === tripName) {
              return {
                ...trip,
                isUserSignedUp: false
              };
            }
            return trip;
          });
          setTrips(updatedTrips);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {

      fetch(`https://mavle.dk/tomcat/rental_web_app/api/trip/assign/${user.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSavedMessage(`Du har nu tilmeldt dig ${data.tripName}`);

          const updatedTrips = trips.map(trip => {
            if (trip.tripName === tripName) {
              return {
                ...trip,
                isUserSignedUp: true
              };
            }
            return trip;
          });
          setTrips(updatedTrips);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  
  return (
    <div style={{ padding: '50px' }}>
      {savedMessage && <div style={{ padding: '50px' }}>{savedMessage}</div>}
      <table>
        <thead>
          <tr>
            <th style={{ padding: '20px' }}>Navn på tur</th>
            <th style={{ padding: '20px' }}>Dato</th>
            <th style={{ padding: '20px' }}>Tidspunkt</th>
            <th style={{ padding: '20px' }}>Sted</th>
            <th style={{ padding: '20px' }}>Varighed</th>
            <th style={{ padding: '20px' }}>Pakkeliste</th>
            <th style={{ padding: '20px' }}>Navn på guide</th>
            <th style={{ padding: '20px' }}>Tilmeldte</th>
          </tr>
        </thead>
        <tbody>
  {trips.map(trip => (
    <tr key={trip.tripName}>
      <td style={{ padding: '20px' }}>{trip.tripName}</td>
      <td style={{ padding: '20px' }}>{trip.date}</td>
      <td style={{ padding: '20px' }}>{trip.time}</td>
      <td style={{ padding: '20px' }}>{trip.location}</td>
      <td style={{ padding: '20px' }}>{trip.duration}</td>
      <td style={{ padding: '20px' }}>{trip.packingList}</td>
      <td style={{ padding: '20px' }}>{trip.guide}</td>
      <td style={{ padding: '20px' }}>
        {trip.users.length > 0 ? (
          <ul>
            {trip.users.map((username, index) => (
              <li key={index}>{username}</li>
            ))}
          </ul>
        ) : (
          <p> Ingen har meldt sig på denne tur endnu </p>
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default ViewTripsListAdmin;
