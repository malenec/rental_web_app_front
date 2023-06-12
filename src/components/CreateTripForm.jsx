import React, {useState} from 'react';

function CreateTripForm() {

const initialValue = {
    tripName: "",
    date: "",
    time: "",
    location: "",
    duration: "",
    packingList: "",
    guide: ""
}

const [trip, setTrip] = useState(initialValue);
const [savedMessage, setSavedMessage] = useState("");

const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setTrip({...trip, [name]: value});
}

const handleSubmit = event => {
    event.preventDefault();

    fetch('https://mavle.dk/tomcat/rental_web_app/api/trip/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setTrip(initialValue);
      setSavedMessage(`${data.tripName} er nu oprettet som tur med ${data.guide} som guide`);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="container">
        <div className="form-group mt-3 mx-5" >
            <label htmlFor="tripName">Navn på tur:</label>
            <input 
            className="form-control" 
            id="tripName"
            name="tripName"
            type="text"
            value={trip.tripName}
            onChange={handleChange}
            placeholder="Navn på tur"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="date">Dato:</label>
            <input 
            className="form-control" 
            id="date"
            name="date"
            type="text"
            value={trip.date}
            onChange={handleChange}
            placeholder="åååå-mm-dd"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="time">Tidspunkt:</label>
            <input
            className="form-control"
            id="time"
            name="time"
            type="text"
            value={trip.time}
            onChange={handleChange}
            placeholder="tt:mm"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="location">Sted:</label>
            <input
            className="form-control"
            id="location"
            name="location"
            type="text"
            value={trip.location}
            onChange={handleChange}
            placeholder="Sted"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="duration">Varighed:</label>
            <input
            className="form-control"
            id="duration"
            name="duration"
            type="text"
            value={trip.duration}
            onChange={handleChange}
            placeholder="Varighed"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="packingList">Pakkeliste:</label>
            <input
            className="form-control"
            id="packingList"
            name="packingList"
            type="text"
            value={trip.packingList}
            onChange={handleChange}
            placeholder="Pakkeliste"
            />
        </div>
        <div className="form-group mt-3 mx-5" >
            <label htmlFor="guide">Navn på guide:</label>
            <input 
            className="form-control" 
            id="guide"
            name="guide"
            type="text"
            value={trip.guide}
            onChange={handleChange}
            placeholder="Navn på guide"
            />
        </div>
        <button 
        type="submit"
        className="btn btn-primary mt-3 mx-5"
        onClick={handleSubmit}
        >Submit
        </button>
        {savedMessage && <div className="mt-3 mx-5">{savedMessage}</div>}
    </div>
  );
}

export default CreateTripForm

