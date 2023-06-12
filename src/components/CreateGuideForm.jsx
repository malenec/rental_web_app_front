import React, {useState} from 'react';

function CreateGuideForm() {

const initialValue = {
    guideName: "",
    gender: "",
    birthYear: "",
    profile: "",
    imageUrl: ""
}

const [guide, setGuide] = useState(initialValue);
const [savedMessage, setSavedMessage] = useState("");

const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setGuide({...guide, [name]: value});
}

const handleSubmit = event => {
    event.preventDefault();

    fetch('https://mavle.dk/tomcat/rental_web_app/api/guide/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guide)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setGuide(initialValue);
      setSavedMessage(`${data.guideName} er nu oprettet som guide`);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="container">
        <div className="form-group mt-3 mx-5" >
            <label htmlFor="guideName">Navn:</label>
            <input 
            className="form-control" 
            id="guideName"
            name="guideName"
            type="text"
            value={guide.guideName}
            onChange={handleChange}
            placeholder="Navn"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="gender">Køn:</label>
            <input 
            className="form-control" 
            id="gender"
            name="gender"
            type="text"
            value={guide.gender}
            onChange={handleChange}
            placeholder="Køn"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="birthYear">Fødselsår:</label>
            <input 
            className="form-control" 
            id="birthYear" 
            name="birthYear"
            type="text"
            value={guide.birthYear}
            onChange={handleChange}
            placeholder="Fødselsår"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="profile">Profil:</label>
            <input 
            className="form-control" 
            id="profile" 
            name="profile"
            type="text"
            value={guide.profile}
            onChange={handleChange}
            placeholder="Profil"
            />
        </div>
        <div className="form-group mt-3 mx-5">
            <label htmlFor="imageUrl">Billede:</label>
            <input 
            className="form-control" 
            id="imageUrl" 
            name="imageUrl"
            type="text"
            value={guide.imageUrl}
            onChange={handleChange}
            placeholder="Billede"
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

export default CreateGuideForm

