import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Admin from '../routes/Admin';
import NewHouse from '../routes/NewHouse';
import NewRental from '../routes/NewRental';
import AllRentalsUser from '../routes/AllRentalsUser';
import AllRentalsAdmin from '../routes/AllRentalsAdmin';
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
            <Route path="/newhouse" element={<NewHouse user={user} />} />
            <Route path="/newrental" element={<NewRental user={user} />} />
            <Route path="/allrentalsuser" element={<AllRentalsUser user={user} />} />
            <Route path="/allrentalsadmin" element={<AllRentalsAdmin user={user} />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default Content;
