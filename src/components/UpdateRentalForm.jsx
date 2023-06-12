import React, { useState } from 'react';

function UpdateRentalForm({ rental, onUpdate }) {
  const [updatedRental, setUpdatedRental] = useState(rental);
  const [savedMessage, setSavedMessage] = useState("");

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUpdatedRental({ ...updatedRental, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  
    fetch('https://mavle.dk/tomcat/rental_web_app/api/rental/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedRental)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSavedMessage(`Lejekontrakten med ID ${data.id} er nu blevet opdateret`);
        onUpdate(updatedRental);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div className="container">
      <h3 className='mt-5 mx-5 mb-5'> Opdater din lejekontrakt </h3>
      <form>
        <div className="form-group">
          <label htmlFor="startDate">Startdato:</label>
          <input
            className="form-control"
            id="startDate"
            name="startDate"
            type="date"
            value={updatedRental.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Slutdato:</label>
          <input
            className="form-control"
            id="endDate"
            name="endDate"
            type="date"
            value={updatedRental.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priceAnnual">Årlig pris:</label>
          <input
            className="form-control"
            id="priceAnnual"
            name="priceAnnual"
            type="text"
            value={updatedRental.priceAnnual}
            onChange={handleChange}
            placeholder="Årlig pris"
          />
        </div>
        <div className="form-group">
          <label htmlFor="deposit">Depositum:</label>
          <input
            className="form-control"
            id="deposit"
            name="deposit"
            type="text"
            value={updatedRental.deposit}
            onChange={handleChange}
            placeholder="Depositum"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Kontaktperson:</label>
          <input
            className="form-control"
            id="contactPerson"
            name="contactPerson"
            type="text"
            value={updatedRental.contactPerson}
            onChange={handleChange}
            placeholder="Kontaktperson"
          />
        </div>
        <div className="form-group">
          <label htmlFor="house">Hus:</label>
          <input
            className="form-control"
            id="house"
            name="house"
            type="text"
            value={updatedRental.house}
            onChange={handleChange}
            placeholder="Hus"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Opdater
        </button>
      </form>
      {savedMessage && <div className="mt-3">{savedMessage}</div>}
    </div>
  );
}

export default UpdateRentalForm;
