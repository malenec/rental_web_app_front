import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Admin from '../routes/Admin';
import NewGuide from '../routes/NewGuide';
import NewTrip from '../routes/NewTrip';
import AllTripsUser from '../routes/AllTripsUser';
import AllTripsAdmin from '../routes/AllTripsAdmin';
import User from '../routes/User';

function Content({ user, loggedIn }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        {loggedIn && (
          <>
            <Route path="/admin" element={<Admin user={user} />} />
            <Route path="/user" element={<User user={user} />} />
            <Route path="/newguide" element={<NewGuide user={user} />} />
            <Route path="/newtrip" element={<NewTrip user={user} />} />
            <Route path="/alltripsuser" element={<AllTripsUser user={user} />} />
            <Route path="/alltripsadmin" element={<AllTripsAdmin user={user} />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default Content;
