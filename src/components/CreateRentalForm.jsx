import React, {useState} from 'react';

function CreateRentalForm() {

const initialValue = {
  startDate: "",
  endDate: "",
  priceAnnual: "",
  deposit: "",
  contactPerson: "",
  house: "",
}

const [rental, setRental] = useState(initialValue);
const [savedMessage, setSavedMessage] = useState("");

const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setRental({...rental, [name]: value});
}

const handleSubmit = event => {
    event.preventDefault();

    fetch('https://mavle.dk/tomcat/rental_web_app/api/rental/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rental)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setRental(initialValue);
      setSavedMessage(`Fra ${data.startDate} til ${data.endDate} er der nu oprettet en lejekontrakt`);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="container">
        <div className="form-group mt-3 mx-5">
            <label htmlFor="startDate">Startdato:</label>
            <input 
            className="form-control" 
            id="startDate"
            name="startDate"
            type="date"
            value={rental.startDate}
            onChange={handleChange}
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="endDate">Slutdato:</label>
            <input
            className="form-control"
            id="endDate"
            name="endDate"
            type="date"
            value={rental.endDate}
            onChange={handleChange}
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="priceAnnual">Årlig pris:</label>
            <input
            className="form-control"
            id="priceAnnual"
            name="priceAnnual"
            type="text"
            value={rental.priceAnnual}
            onChange={handleChange}
            placeholder="Årlig pris"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="deposit">Depositum:</label>
            <input
            className="form-control"
            id="deposit"
            name="deposit"
            type="text"
            value={rental.deposit}
            onChange={handleChange}
            placeholder="Depositum"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="contactPerson">Kontaktperson:</label>
            <input
            className="form-control"
            id="contactPerson"
            name="contactPerson"
            type="text"
            value={rental.contactPerson}
            onChange={handleChange}
            placeholder="Kontaktperson"
            />
        </div>
        <div className="form-group mt-3 mx-5" >
            <label htmlFor="house">Hus:</label>
            <input 
            className="form-control" 
            id="house"
            name="house"
            type="text"
            value={rental.house}
            onChange={handleChange}
            placeholder="Hus"
            />
        </div>
        <button 
        type="submit"
        className="btn btn-primary mt-3 mx-5"
        onClick={handleSubmit}
        >Opret
        </button>
        {savedMessage && <div className="mt-3 mx-5">{savedMessage}</div>}
    </div>
  );
}

export default CreateRentalForm

