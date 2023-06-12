import { NavLink } from 'react-router-dom';


function Admin({user}) {
  return (
    <div>
      <h1 className='mt-5 mx-5 mb-5'>Hej {user.username},</h1>
      <h2 className='mt-5 mx-5 mb-5'> Her er dine valgmuligheder </h2>
      <NavLink to="/newguide" className="btn btn-primary mt-5 mx-5 mb-5">Tilføj ny guide</NavLink>
      <NavLink to="/newtrip" className="btn btn-primary mt-5 mx-5 mb-5">Tilføj ny tur</NavLink>
      <NavLink to="/alltripsadmin" className="btn btn-primary mt-5 mx-5 mb-5">Se alle ture</NavLink>
    </div>
  )
}


export default Admin

