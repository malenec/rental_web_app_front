import { NavLink } from 'react-router-dom';

function User({user}) {
  return (
    <div>
      <h1 className='mt-5 mx-5 mb-5'>Hej {user.username},</h1>
      <h2 className='mt-5 mx-5 mb-5'> Her er dine valgmuligheder </h2>
      <NavLink to="/allrentalsuser" className="btn btn-primary mt-5 mx-5 mb-5">Se alle lejekontrakter</NavLink>
    </div>
  )
}

export default User

