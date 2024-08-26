import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Table from './Components/Table';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleUserAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="bg-white p-4 rounded-md shadow-md flex justify-center space-x-4 mb-8">
          <Link
            to="/"
            className="text-lg font-semibold text-blue-600 hover:text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/add-user"
            className="text-lg font-semibold text-green-600 hover:text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-200"
          >
            Add User
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Table refresh={refresh} />}
          />
          <Route
            path="/add-user"
            element={<AddUser onUserAdded={handleUserAdded} />}
          />
          <Route
            path="/update/:id"
            element={<UpdateUser />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
