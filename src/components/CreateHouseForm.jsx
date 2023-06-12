import React, {useState} from 'react';

function CreateHouseForm() {

const initialValue = {
    address: "",
    city: "",
    numberOfRooms: ""
}


const [house, setHouse] = useState(initialValue);
const [savedMessage, setSavedMessage] = useState("");

const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setHouse({...house, [name]: value});
}

const handleSubmit = event => {
    event.preventDefault();

    fetch('https://mavle.dk/tomcat/rental_web_app/api/house/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(house)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setHouse(initialValue);
      setSavedMessage(`${data.address} er nu tilgængelig til udlejning`);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="container">
        <div className="form-group mt-3 mx-5" >
            <label htmlFor="address">Adresse:</label>
            <input 
            className="form-control" 
            id="address"
            name="address"
            type="text"
            value={house.address}
            onChange={handleChange}
            placeholder="Adresse"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="city">By:</label>
            <input 
            className="form-control" 
            id="city"
            name="city"
            type="text"
            value={house.city}
            onChange={handleChange}
            placeholder="By"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="numberOfRooms">Antal rum:</label>
            <input 
            className="form-control" 
            id="numberOfRooms" 
            name="numberOfRooms"
            type="text"
            value={house.numberOfRooms}
            onChange={handleChange}
            placeholder="Antal rum"
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

export default CreateHouseForm

