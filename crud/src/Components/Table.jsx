import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Table = ({ refresh }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios.get("http://localhost:5555/api/getAllUsers")
    .then((res) => {
      setData(res.data)
    })

    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5555/api/deleteUser/${id}`).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Name</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Email</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Password</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Address</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Phone</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Hobby</th>
            <th className="border-b-2 border-gray-300 py-2 px-4 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200">
              <td className="border-b border-gray-300 py-2 px-4">{item.name}</td>
              <td className="border-b border-gray-300 py-2 px-4">{item.email}</td>
              <td className="border-b border-gray-300 py-2 px-4">{item.password}</td>
              <td className="border-b border-gray-300 py-2 px-4">{item.address}</td>
              <td className="border-b border-gray-300 py-2 px-4">{item.phone}</td>
              <td className="border-b border-gray-300 py-2 px-4">{item.hobby}</td>
              <td className="border-b border-gray-300 py-2 px-4">
                <button
                  onClick={() => navigate(`/update/${item.userId}`)}
                  className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200 mr-2"
                >
                  Update
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200 mt-2"
                  onClick={() => handleDelete(item.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
