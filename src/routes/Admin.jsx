import { NavLink } from 'react-router-dom';


function Admin({user}) {
  return (
    <div>
      <h1 className='mt-5 mx-5 mb-5'>Hej {user.username},</h1>
      <h2 className='mt-5 mx-5 mb-5'> Her er dine valgmuligheder </h2>
      <NavLink to="/newhouse" className="btn btn-primary mt-5 mx-5 mb-5">Tilføj nyt hus</NavLink>
      <NavLink to="/newrental" className="btn btn-primary mt-5 mx-5 mb-5">Tilføj ny lejekontrakt</NavLink>
      <NavLink to="/allrentalsadmin" className="btn btn-primary mt-5 mx-5 mb-5">Se alle lejekontrakter</NavLink>
    </div>
  )
}


export default Admin

