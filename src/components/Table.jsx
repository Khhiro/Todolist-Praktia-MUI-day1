import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Table() {
  // Данные пользователей
  const [obj, setObj] = useState([
    { id: '1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1JaEOQsMYEcjqRU__z6kXlB2QTvVmQpEcw&s', name: 'Muhammad', email: 'Muhammad@gmail.com', number: '939800100', status: true, city: 'dushanbe' },
    { id: '2', avatar: '', name: 'Anush', email: 'anush@gmail.com', number: '939800100', status: false, city: 'dushanbe' },
    { id: '3', avatar: '', name: 'Abdurashid', email: 'Abdurashid@gmail.com', number: '939800100', status: false, city: 'dushanbe' },
    { id: '4', avatar: '', name: 'Usmon', email: 'Usmon@gmail.com', number: '939800100', status: true, city: 'dushanbe' },
  ]);


  const [cout, setCout] = useState(false);

  const deleteFunc = (id) => {
    setObj((propus) => propus.filter((elem) => elem.id !== id));
  };


  const EditModal = () => {
    if (!cout) return null; 

    return (
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.1)',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '20px', color: '#333' }}>
            Edit User
          </h2>

          <input placeholder="Avatar URL" type="text" style={inputStyles} />
          <input placeholder="Name" type="text" style={inputStyles} />
          <input placeholder="Email" type="email" style={inputStyles} />
          <input placeholder="Phone" type="tel" style={inputStyles} />

          <select style={inputStyles}>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <select style={inputStyles}>
            <option value="Dushanbe">Dushanbe</option>
            <option value="Khujand">Khujand</option>
            <option value="Varzob">Varzob</option>
          </select>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Save
            </button>
            <button
              onClick={() => setCout(false)}
              style={{
                backgroundColor: '#f44336',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  };

  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '80%', textAlign: 'justify', margin: 'auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>City</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {obj.map((elem) => (
            <tr key={elem.id}>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <div><img src={elem.avatar} style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }} alt="" /></div>
                <div>
                  <p>{elem.name}</p>
                  <p>{elem.email}</p>
                </div>
              </td>
              <td>{elem.number}</td>
              <td style={elem.status ? { color: 'green' } : { color: 'red' }}>
                {elem.status ? 'Active' : 'Inactive'}
              </td>
              <td>{elem.city}</td>
              <td>
                <IconButton onClick={() => { deleteFunc(elem.id) }} color="error">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => { setCout(true) }}>
                  <EditCalendarIcon />
                </IconButton>
                <IconButton color="primary">
                  <AccountCircleIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal />
    </div>
  );
}
